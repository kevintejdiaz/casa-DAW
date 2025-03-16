public class PerroDeCaza : Animal
{

    public PerroDeCaza(string nombre) : base(nombre)
    {
    }
    
    public void Cazar()
    {
        Console.WriteLine($"{Nombre} esta cazando");
    }
}