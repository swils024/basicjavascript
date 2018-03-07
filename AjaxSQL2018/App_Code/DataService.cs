using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;

/// <summary>
/// Summary description for DataService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class DataService : System.Web.Services.WebService
{

    public DataService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public List<Order> getListOfOrders(List<string> aData)
    {
        //System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();

        SqlDataReader dr;
        List<Order> orderList = new List<Order>();

        using (SqlConnection conn = new SqlConnection("server=.\\sqlexpress2012;database=Northwind;integrated security=sspi"))
        {
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.CommandText = "select * from orders where ShipCountry = @whatCountry";
                cmd.Connection = conn;
                cmd.Parameters.AddWithValue("@whatCountry", aData[0]);
                conn.Open();
                dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                while (dr.Read())
                {
                    int oo = int.Parse(dr["OrderID"].ToString());
                    DateTime dd = DateTime.Parse(dr["OrderDate"].ToString());
                    decimal ff = decimal.Parse(dr["Freight"].ToString());
                    string ss = dr["ShipCity"].ToString();
                    orderList.Add(new Order { OrderID = oo, OrderDate = dd, Freight = ff, ShipCity = ss });
                }
            }
        }
        return orderList;
    }

    [WebMethod]
    public string HelloWorld()
    {
        return "Hello World";
    }

}
