using Microsoft.EntityFrameworkCore;
using NetTopologySuite.Geometries;
using NetTopologySuite;
using PeliculasAPI;
using PeliculasAPI.Servicios;
using AutoMapper;
using PeliculasAPI.Utilidades;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddIdentityCore<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();


builder.Services.AddScoped<UserManager<IdentityUser>>();
builder.Services.AddScoped<SignInManager<IdentityUser>>();
builder.Services.AddAuthentication().AddJwtBearer(opciones =>
{
    opciones.MapInboundClaims = false;

    opciones.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["llavejwt"]!)),
        ClockSkew = TimeSpan.Zero
    };

});

builder.Services.AddAuthorization(opciones =>
{
    opciones.AddPolicy("esadmin", politica => politica.RequireClaim("esadmin"));
});


builder.Services.AddTransient<IServicioUsuarios, ServicioUsuarios>();

builder.Services.AddOutputCache(opciones =>
{
    opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60);
});

builder.Services.AddDbContext<ApplicationDbContext>(opciones =>
opciones.UseSqlServer("name=DefaultConnection", sqlServer => sqlServer.UseNetTopologySuite()));

builder.Services.AddSingleton<GeometryFactory>(NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326));

var origenesPermitidos = builder.Configuration.GetValue<string>("origenesPermitidos")!.Split(",");

builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(opcionesCORS =>
    {
        opcionesCORS.WithOrigins(origenesPermitidos).AllowAnyMethod().AllowAnyHeader()
        .WithExposedHeaders("cantidad-total-registros");
    });
});

builder.Services.AddTransient<IAlmacenadorArchivos, AlmacenadorArchivosAzure>();
builder.Services.AddHttpContextAccessor();

builder.Services.AddSingleton(provider =>
               new MapperConfiguration(config =>
               {
                   var geometryFactory = provider.GetRequiredService<GeometryFactory>();
                   config.AddProfile(new AutoMapperProfiles(geometryFactory));
               }).CreateMapper());


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    if (dbContext.Database.IsRelational())
    {
        dbContext.Database.Migrate();
    }
}

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.UseOutputCache();


app.Run();
