public class Animal 
{
    protected string Nombre {get; set;}

    public Animal (string nombre)
    {
        this.Nombre = nombre;
    }

    public virtual void HacerSonido()
    {
        Console.WriteLine($"El perro {Nombre} hace Woof!, el gato hace Miau! y el gato Quack!");
    }
}