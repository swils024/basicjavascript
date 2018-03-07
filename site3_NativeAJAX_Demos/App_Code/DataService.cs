using System;
using System.Collections;
using System.Collections.Generic;
using System.Xml;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using ole=System.Data.OleDb;
using System.Data;
using ss = System.Web.Script.Serialization;

/// <summary>
/// Summary description for DataService
/// </summary>
/// 
[System.Web.Script.Services.ScriptService]
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class DataService : System.Web.Services.WebService {

    public DataService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    [System.Web.Script.Services.ScriptMethod]
    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }

    [System.Web.Script.Services.ScriptMethod]
    [WebMethod]
    public string CustCity(string whatCity, int tableOrJSON)
    {
        ole.OleDbConnection conn = new ole.OleDbConnection();
        conn.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Nwind.mdb");
        ole.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand("",conn);
        cmd.CommandText = "select CustomerID, CompanyName, City, Country,Phone, Fax, ContactName  from customers where city like ?";
        cmd.Parameters.AddWithValue("@whatCity",whatCity);

        ole.OleDbDataAdapter da = new ole.OleDbDataAdapter(cmd);
        System.Data.DataTable dt = new System.Data.DataTable();
        da.Fill(dt);
        string doc = "";
        if (tableOrJSON == 2)
            doc = FormatDataAsDOM(dt);
        else
            doc = FormatDataAsTable(dt);
        return doc;
    }



    private static string FormatDataAsDOM(System.Data.DataTable dt)
    {

        Dictionary<string, string> jsonRow = new Dictionary<string, string>();
        Dictionary<string, Dictionary<string, string> > jsonGang = new Dictionary<string, Dictionary<string, string> >();
 
        foreach (DataRow dr in dt.Rows)
        {
            jsonRow = new Dictionary<string, string>();
            foreach (DataColumn col in dt.Columns)
            { 
                jsonRow.Add(col.ColumnName, dr[col].ToString());
            }
            jsonGang.Add(dr[0].ToString(), jsonRow);
        }
        //===============
        ss.JavaScriptSerializer jsonSerialiser = new ss.JavaScriptSerializer();
        System.Text.StringBuilder sb2 = new System.Text.StringBuilder();
        jsonSerialiser.Serialize(jsonGang, sb2);
        string sss = sb2.ToString();
        //===============
        return sss;
    }

    private static string FormatDataAsTable(System.Data.DataTable dt)
    {
        string tableTop = "<table border='0' cellspacing='3' cellpadding='4' bgcolor='#eeeeee' width='80%'>";
        System.Text.StringBuilder sb = new System.Text.StringBuilder(tableTop);
        sb.Append("<tr>");
        foreach (DataColumn col in dt.Columns)
        {
            sb.Append("<th>" + col.ColumnName + "</th>");
        }
        sb.Append("</tr>");
        foreach (DataRow dr in dt.Rows)
        {
            sb.Append("<tr>");
            foreach (DataColumn col in dt.Columns)
            {
                sb.Append("<td bgcolor='#ffffff'>" + "" + dr[col] + "</td>");
            }
            sb.Append("</tr>");
        }
        //===============
        sb.Append("</table>");
        //System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
        //doc.LoadXml(sb.ToString());
        //return doc;
        return sb.ToString();
    }

    
}

