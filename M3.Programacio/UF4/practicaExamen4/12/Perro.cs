public class Perro : Animal
{

    public Perro(string nombre) : base(nombre)
    {

    }
    public override void HacerSonido()
    {
        Console.WriteLine($"{Nombre}: Woof!");
    }

}