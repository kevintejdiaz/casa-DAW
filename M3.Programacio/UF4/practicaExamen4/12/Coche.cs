public class Coche : Vehiculo
{
    public int NumeroPuertas {get; set;}

    public Coche (string marca, string modelo, int ano, int numeroPuertas) :base(marca,modelo, ano)
    {
    this.NumeroPuertas = numeroPuertas;
    }
    
    public override void MostrarDetalles()
    {
        base.MostrarDetalles();
        Console.WriteLine($"Este coche tiene {NumeroPuertas} puertas");
    }
}