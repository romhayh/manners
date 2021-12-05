# mannings api


## mannings
---

`GET` | all mannings of a certain unit
```
/mannings?unitId=:unitID
```
---

`GET` | a the manning for a job in a certain unit
```
mannings/job/:job?unitId=:unitID
``` 
---

`PUT` | update or insert (if it doesn't exists) a manning for a job in a certain unit
```
/mannings/:manningId
```
the request body needs to be of this shape:
```ts
{
    "unitId": string,
    "job"; string,
    "name" : string || "role" : string
}
```

---
</br>

## jobs
---
`GET` | all jobs
```
/jobs
```

---
</br>

## roles
`GET` | all roles
```
/roles
```

---
</br>

## job-options
those are the roles that are able to man the certain job
for example a מח"ט can be a מפקד טורן.

---
`GET` | all jobs options
```
/jobs-options
```
---

