"select distinct toint(p.[ReasonID]) as ReasonID\nfrom [Fact_Purchase_Orders] p\nunion \nselect -1\n\n"
