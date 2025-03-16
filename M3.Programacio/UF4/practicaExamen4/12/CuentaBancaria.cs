public class CuentaBancaria
{
    private string Titular {get; set;}
    private decimal Saldo {get; set;}


    public CuentaBancaria (string titular, decimal saldoInicial)
    {
        this.Titular = titular;
        this.Saldo = saldoInicial;
    }


    public void  Depositar(decimal monto)
    {
        if ( monto > 0)
        {
            Saldo += monto;
            Console.WriteLine($"Se dipositaron {monto}, su saldo actual es de {Saldo}");
        }
    }

    public void Retirar(decimal monto)
    {
        if (monto < Saldo)
        {
            Saldo -= monto;
            Console.WriteLine($"Extraccion exitosa, el saldo restante en su cuenta es de {Saldo}");
        }
        else
        {
            Console.WriteLine("No tiene fondos suficientes para realizar la operacion");
        }
    }

    public void MostrarSaldo()
    {
        Console.WriteLine($"Saldo disponible dentro de su cuenta bancaria Sr/a {Titular} : {Saldo}");
    }
}