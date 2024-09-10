import express from 'express';

const app=express();
app.get('/',(req,res)=>
{
    res.send('server is ready');
})

app.get('/api/jokes',(req,res)=>
{
    const jokes = [
        {
          id: 1,
          title: "Atom",
          content: "Makes up everything."
        },
        {
          id: 2,
          title: "Egg",
          content: "Cracks each other up."
        },
        {
          id: 3,
          title: "Tomato",
          content: "Saw salad dressing."
        },
        {
          id: 4,
          title: "Noodle",
          content: "Impasta."
        },
        {
          id: 5,
          title: "Scarecrow",
          content: "Outstanding in field."
        }
      ]
      res.send(jokes);
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});