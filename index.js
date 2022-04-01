let calculator =
{
    sum()
    {
        return this.a + this.b;
    },
    mul()
    {
        return this.a * this.b;
    },
    read()
    {
        this.a = +prompt(' Enter the value of the first term: ');
        this.b = +prompt(' Enter the value of the second term: ');
    }
};

this.c = +prompt(' Press 1 to multiply these terms or Press 2 to Add these terms ');
if(c==2)
{
    calculator.read();
        alert( calculator.sum() );
}
else if(c==1)
{
    calculator.read();
    alert( calculator.mul() );
}
else
{
    alert(' Invalid input ');
}