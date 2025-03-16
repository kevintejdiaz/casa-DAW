internal class Program
{
    private static void Main(string[] args)
    {
        
    }
}

public class Droide {
    public string Nombre {get; set;}
    public string TipoUnidad {get; set;}
    public int NivelBateria {get; set;}



    public Droide (string nombre, string tipoUnidad, int nivelBateria)
    {
        Nombre = nombre;
        TipoUnidad = tipoUnidad;
        NivelBateria = nivelBateria;
    }


    public virtual string ShowInfo(){
         return $"Los nombres correspondientes son {nombre}, esta unidad es de tipo {tipoUnidad} y posee un nivel de bateria del {nivelBateria}%"
    }

}

public class DroideProtocolo : Droide {
    public DroideProtocolo (string nombre, )
    {

    }
}