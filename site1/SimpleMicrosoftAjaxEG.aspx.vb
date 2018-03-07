
Partial Class SimpleAjaxEG
    Inherits System.Web.UI.Page

    Protected Sub Calendar1_SelectionChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles Calendar1.SelectionChanged
        Label1.Text = Calendar1.SelectedDate.ToLongDateString()
        Calendar1.Visible = False
        Button1.Visible = True
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Calendar1.Visible = True
        Button1.Visible = False

    End Sub
End Class
