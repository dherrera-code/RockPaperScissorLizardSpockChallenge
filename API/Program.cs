using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<CPUResponse>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
    builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });

    // options.AddPolicy("Client", policy =>
    // {
    //     // policy.WithOrigins()
    //     // policy.WithOrigins("http://localhost:5500","http://127.0.0.1:5500","http://localhost:5501","http://127.0.0.1:5501", "https://polite-sand-05308aa1e.6.azurestaticapps.net")
    //     // .AllowAnyHeader()
    //     // .AllowAnyMethod();
    // });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");
app.UseAuthorization();


app.MapControllers();

app.Run();
