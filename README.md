# mannings api


## mannings
---

`GET` | all mannings of a certain unit
```
/units/:unitId/mannings
```
---

`GET` | a the manning for a job in a certain unit
```
/units/:unitId/mannings/:job
``` 
---

`PUT` | update or insert (if it doesn't exists) a manning for a job in a certain unit
```
/units/:unitId/mannings/:job
```
the request body needs to be of this shape:

```ts
{
    "unitId":number,
    "manning" : string,
    "role"? : string
}
```

---

## jobs
---
`GET` | all jobs
```
/jobs
```

