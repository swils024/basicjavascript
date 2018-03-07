using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System.ComponentModel;
/// <summary>
/// Summary description for WebService
/// </summary>
/// 


[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, include the following line:
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    [System.Web.Script.Services.ScriptMethod]
    public string HelloWorld() {
        return "Hello from the web service at " + DateTime.Now.ToLongTimeString();
    }

    [WebMethod]
    [System.Web.Script.Services.ScriptMethod]
    public string TuTimes(int a)
    {
        return String.Format("I calculate that 2 times {0} is {1}", a,  (2 * a));
    }
    
}

