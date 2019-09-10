# SDE TypeScript Development Guide
We will use a development of the SDE Team Server (collaboration tool) as a
sample of the application being development through this guide.

## Changes
One main thing that should be accepted without doubts is that everything you did
yesterday might be changed tomorrow. And application development itself from the
first steps is a sequence of small changes. This is how it evolves.

## Ubiquitous language 
This is what is usually called DSL (domain-specific language). And an essential
point of the succesfull application development is that this is a primary
programming language for the application. All other are temporary ones that can
be replaced tomorrow (see [Changes](#changes)).

This language is used everywhere. You translate it into TypeScript, SQL, use
to communicate with stakeholders and teammates.

## Sample
The most primitive and easy change we can do on the blank page is to start
working with samples. For stakeholder is is easy to define them, because this
is what he is dealing on a daily basis with. Our, developers' goal then is to
find patterns inductively and develop schemas and algorithms.

Sample is a vital part of ubiquitous language and is frequently underestimated.

```typescript
const alice = {
    firstName: "Alice",
    role: "developer",
    login: "alice@sde.team",
    password: "!qa@ws3eD"
}
```
