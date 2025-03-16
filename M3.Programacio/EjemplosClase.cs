public class Program
{
    private static void Main(string[] args)
    {
        Proyecto proyecto = new Proyecto("Desarrollo de Aplicación Web", "Crear una api para app multiplataforma", 25, 120, "Completado");

        Empleado empleado1 = new Empleado("Luis", "Desarrollador de software", 1000);
        Empleado empleado2 = new Empleado("Marta", "Analista de datos", 2000);

        Tarea tarea1 = new Tarea("Crear la estructura base de la app", "Pendiente", "La app debe funcionar en Android e iOS");
        Tarea tarea2 = new Tarea("Configurar el CRM", "En progreso", "Configurar las cuentas de usuario y personalizar el CRM");

        Cliente cliente1 = new Cliente("Ana", "2345678B", 5000, 1500);
        Cliente cliente2 = new Cliente("Carlos", "3456789C", 4000, 2000);

        Proveedor proveedor1 = new Proveedor("Software Solutions", "B2345678");

        proyecto.AgregarEmpleadoLista(empleado1);
        proyecto.AgregarEmpleadoLista(empleado2);
        proyecto.AgregarTareaLista(tarea1);
        proyecto.AgregarTareaLista(tarea2);
        proyecto.AgregarClienteLista(cliente1);
        proyecto.AgregarClienteLista(cliente2);
        proyecto.AgregarProveedorLista(proveedor1);

        proyecto.ShowData();

    }
}

public class Proyecto
{
    private string nombreProyecto;
    private string descripcionProyecto;
    private int diasRestantes;
    private double costoProyecto;
    private string estadoProyecto;
    private List<Empleado> listaEmpleados;
    private List<Tarea> listaTareas;
    private List<Cliente> listaClientes;
    private List<Proveedor> listaProveedor;

    public Proyecto(string nombreProyecto, string descripcionProyecto, int diasRestantes, double costoProyecto, string estadoProyecto)
    {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.diasRestantes = diasRestantes;
        this.costoProyecto = costoProyecto;
        this.estadoProyecto = estadoProyecto;
        listaEmpleados = new List<Empleado>();
        listaTareas = new List<Tarea>();
        listaClientes = new List<Cliente>();
        listaProveedor = new List<Proveedor>();
    }

    public double CostoTotalProyecto()
    {
        double costoTotal = diasRestantes * costoProyecto;
        return costoTotal;
    }

    public void AgregarEmpleadoLista(Empleado empleado)
    {
        listaEmpleados.Add(empleado);
    }

    public void AgregarTareaLista(Tarea tarea)
    {
        listaTareas.Add(tarea);
    }

    public void AgregarClienteLista(Cliente cliente)
    {
        listaClientes.Add(cliente);
    }

    public void AgregarProveedorLista(Proveedor proveedor)
    {
        listaProveedor.Add(proveedor);
    }

    public void ShowData()
    {
        Console.WriteLine("Nombre del proyecto: " + nombreProyecto);
        Console.WriteLine("Descripcion: " + descripcionProyecto);
        Console.WriteLine("Dias restantes: " + diasRestantes);
        Console.WriteLine("Costo del proyecto: " + costoProyecto);
        Console.WriteLine("Costo total del proyecto: " + CostoTotalProyecto());
        Console.WriteLine("Estado del proyecto: " + estadoProyecto);

        Console.ForegroundColor = ConsoleColor.Red;
        System.Console.WriteLine("**** LISTA EMPLEADOS ****");
        Console.ForegroundColor = ConsoleColor.White;
        foreach (Empleado empleado in listaEmpleados)
        {
            Console.WriteLine("Nombre del empleado: " + empleado.NombreEmpleado);
            Console.WriteLine("Cargo del empleado: " + empleado.Cargo);
            Console.WriteLine("Salario del empleado: " + empleado.Salario);
        }

        Console.ForegroundColor = ConsoleColor.Red;
        System.Console.WriteLine("**** LISTA TAREAS ****");
        Console.ForegroundColor = ConsoleColor.White;
        foreach (Tarea tarea in listaTareas)
        {
            Console.WriteLine("Nombre de la tarea: " + tarea.NombreTarea);
            Console.WriteLine("Estado de la tarea: " + tarea.EstadoTarea);
            Console.WriteLine("Descripcion de la tarea: " + tarea.DescripcionTarea);
        }
        Console.ForegroundColor = ConsoleColor.Red;
        System.Console.WriteLine("**** LISTA CLIENTES ****");
        Console.ForegroundColor = ConsoleColor.White;
        foreach (Cliente cliente in listaClientes)
        {
            Console.WriteLine("Nombre del cliente: " + cliente.NombreCliente);
            Console.WriteLine("DNI del cliente: " + cliente.DniCliente);
            Console.WriteLine("Total pagado por el cliente: " + cliente.TotalPagado);
            Console.WriteLine("Adelanto entregado por el cliente" + cliente.AdelantoEntregado);
        }
        Console.ForegroundColor = ConsoleColor.Red;
        System.Console.WriteLine("**** LISTA EMPLEADOS ****");
        Console.ForegroundColor = ConsoleColor.White;

        foreach (Proveedor proveedor in listaProveedor)
        {
            Console.WriteLine("Nombre del proveedor: " + proveedor.nombreProveedor);
            Console.WriteLine("DNI del proveedor: " + proveedor.dniProveedor);
        }
    }
}

public class Empleado
{
    public string NombreEmpleado { get; set; }
    public string Cargo { get; set; }
    public double Salario { get; set; }

    public Empleado(string nombreEmpleado, string cargo, double salario)
    {
        NombreEmpleado = nombreEmpleado;
        Cargo = cargo;
        Salario = salario;
    }
}

public class Tarea
{
    public string NombreTarea { get; set; }
    public string EstadoTarea { get; set; }
    public string DescripcionTarea { get; set; }

    public Tarea(string nombreTarea, string estadoTarea, string descripcionTarea)
    {
        NombreTarea = nombreTarea;
        EstadoTarea = estadoTarea;
        DescripcionTarea = descripcionTarea;
    }
}

public class Cliente
{
    public string NombreCliente { get; set; }
    public string DniCliente { get; set; }
    public double TotalPagado { get; set; }
    public double AdelantoEntregado { get; set; }

    public Cliente(string nombreCliente, string dniCliente, double totalPagado, double adelantoEntregado)
    {
        NombreCliente = nombreCliente;
        DniCliente = dniCliente;
        TotalPagado = totalPagado;
        AdelantoEntregado = adelantoEntregado;
    }
}

public class Proveedor
{
    public string nombreProveedor;
    public string dniProveedor;

    public Proveedor(string nombreProveedor, string dniProveedor)
    {
        this.nombreProveedor = nombreProveedor;
        this.dniProveedor = dniProveedor;
    }
}



//////////////////////Herencia Multinivel/////////////////////////////////////////////////////////////////////////////////////////////////
internal class Programa
{
    static void Main()
    {
        Figura figura = new Figura(10, 20, "triangulo equilatero");

        figura.MostrarArea();


        Triangulo figura2 = new Triangulo(10, 20, "triangulo equilatero");

        figura2.MostrarEstilo();
        figura2.MostrarArea();


        TrianguloColor figura3 = new TrianguloColor("rosa", 10, 20, "Triángulo equilátero");

        figura3.MostrarEstilo();
        figura3.MostrarArea();
        figura3.MostrarColor();
    }
}

class Figura
{
    public int Ancho { get; set; }
    public int Largo { get; set; }
    public string Estilo { get; set; }

    public Figura(int ancho, int largo, string estilo)
    {
        Ancho = ancho;
        Largo = largo;
        Estilo = estilo;
    }


    public virtual void MostrarArea()
    {
        Console.WriteLine("El área es " + Ancho * Largo);
    }

    public void MostrarEstilo()
    {
        Console.WriteLine("El estilo es " + Estilo);
    }
}


class Triangulo : Figura
{
    public Triangulo(int ancho, int largo, string estilo) : base(ancho, largo, estilo)
    {
    }

    public override void MostrarArea()
    {
        Console.WriteLine("El área es " + Ancho * Largo / 2);
    }
}

class TrianguloColor : Triangulo
{
    private string color;

    public TrianguloColor(string color, int ancho, int largo, string estilo) : base(ancho, largo, estilo)
    {
        this.color = color;
    }

    public void MostrarColor()
    {
        Console.WriteLine("El color es " + color);
    }
}3u 1