internal class Program
{
    private static void Main(string[] args)
    {
        Coche subaru = new Coche("Subaru", "2000", 1989, 5);

        subaru.MostrarDetalles();


        CuentaBancaria cuenta = new CuentaBancaria("Kevin", 1000);

        cuenta.MostrarSaldo();
        cuenta.Depositar(500);
        cuenta.Retirar(300m);
        cuenta.Retirar(1500);
        cuenta.Depositar(-50);
        cuenta.MostrarSaldo();

        PerroDeCaza lemay = new PerroDeCaza("Lemay");
        lemay.Cazar();


        // int num1, num2;
        // double resultado = 0;

        // try
        // {
        //     Console.WriteLine("Ingresa el primer numero");
        //     num1 = convert.ToInt32(Console.ReadLine());

        //     Console.WriteLine("Ingresa el segundo numero");
        //     num2 = convert.ToInt32(Console.ReadLine());

        //     Console.WriteLine("Ingresa que tipo de operacion quieres realizar (+,-,*,/)");
        //     string operacion = Console.ReadLine();

        //     switch(operacion)
        //     {
        //         case("+"):
        //             resultado = num1 + num2;
        //             break;
        //         case("-"):
        //             resultado = num1- num2;
        //         case("*"):
        //             resultado = num1 * num2;
        //         case "/":
        //             if (num2 == 0)
        //             {
        //                 throw new DivisionPorCeroException("No se puede dividir entre cero.");
        //             }
        //             resultado = num1 / num2;
        //             break;
        //         default:
        //             throw new ArgumentException("Operación no válida.");
        //     }
        //     }

        // }
        // catch(FormatException ex)
        // {
        //     Console.WriteLine("Error"  {ex.Message})
        }

}


