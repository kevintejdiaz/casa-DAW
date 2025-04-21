internal class Program
{
    private static void Main(string[] args)
    { 

        //Listas

        var nombres = new List<string> {
            "Pedro",
            "Leon",
            "Misa",
            "Raf"
        };

        nombres.Add("Kiwin");
        nombres.Remove(nombres[2]);
        nombres.Insert(2,"Karen");

        //Ordenar al reves
        // nombres.Sort(nombres[-0]);
        // foreach(var nombre in nombres){Console.WriteLine(nombre);}


        //LinkedList
        var lista = new LinkedList<string>();
        lista.AddFirst("Hola");
        lista.AddFirst("Adios");
        lista.AddLast("heHe");
        lista.AddFirst.Next("Shibari");

        LinkedListNode<string> primerNodo = lista.First;
        lista.AddAfter(primerNodo, "Shibari");

        foreach(var nombre in lista){
            Console.WriteLine(nombre);
        }



    }
}