# mannings api


## mannings
---

`GET` | all mannings of a certain unit
```
/mannings?unitId=unitID
```
---

`GET` | a manning for a job in a certain unit
```
/mannings?job=job&unitId=unitID
``` 
---

`PUT` | update or insert (if it doesn't exists) a manning for a job in a certain unit
```
/mannings
```
the request body needs to be of this shape:
```ts
{
    "manningId" : number,   
    "unitId": number,
    "job": string,
    "name" : string || "option" : string
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

## options
`GET` | all options
```
/options
```

---
</br>

## job-options
those are the options that are able to man the certain job
for example a מח"ט can be a מפקד טורן.

---
`GET` | all jobs options
```
/jobs-options
```
---

