using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Order
/// </summary>
public class Order
{
    public int OrderID;
    public DateTime OrderDate { get; set; }
    public decimal Freight { get; set; }
    public string ShipCity { get; set; }
}