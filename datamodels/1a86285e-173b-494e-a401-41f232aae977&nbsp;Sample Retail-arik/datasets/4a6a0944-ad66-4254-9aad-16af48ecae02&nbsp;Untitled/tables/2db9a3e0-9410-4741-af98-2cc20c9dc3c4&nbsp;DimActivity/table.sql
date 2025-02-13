"select distinct toint(s.[ActivityID]) as ActivityID\nfrom [Fact_Sale_orders] s\nunion \nselect -1"
