public class Vehiculo 
{
    public string Marca {get; set;}
    public string Modelo {get; set;}
    public int Ano {get; set;}


    public Vehiculo (string marca, string modelo, int ano)
    {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Ano = Ano;
    }


    public virtual void MostrarDetalles()
    {
        Console.WriteLine($"La marca es {Marca}");
        Console.WriteLine($"El modelo es {Modelo}");
        Console.WriteLine($"El ano es {Ano}");

    }

}