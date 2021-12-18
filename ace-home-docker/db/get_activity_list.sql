select date,amount,type from activity
where activity.date between '2017-01-01' and'2023-12-31'
and type = 'depense'
order by date