"select distinct toint(s.[RiskID]) as RiskID\nfrom [Fact_Sale_orders] s\nunion \nselect toint(-1)"
