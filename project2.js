let a = 2000,b = 3000,c = 2300,d = 3400;
let pos = 0;
let pos1 = 0,pos2 = 0;
let vb = 0,hb = 0,sb = 0,fb = 0;
function myfunction1()
{
    let col1 = document.getElementsByClassName("itemelements")[0];
    let col2 = document.getElementsByClassName("pricematter")[0];
    let col3 = document.getElementsByClassName("quantitymatter")[0];
    let quan = document.getElementsByClassName("quantity")[0];
    let price = document.getElementsByClassName("price")[0];
    if(vb == 0)
    {
        vb++;
        price.innerHTML = a*vb;
        quan.innerHTML = vb;
        col1.style.display = "block";
        col2.style.display = "block";
        col3.style.display = "block";
        pos++;
        var topdist = 100+90*pos;
        totalprice.style.top = `${topdist}px`;
        paybutton.style.top = `${topdist}px`;
        if(window.innerWidth<=370)
        {
            pos1++;
            pos2++;
            var topdist1 = pos1*90;
            var topdist2 = 150+pos2*90;
            paydiv.style.top = `${topdist1}px`;
            paybutton.style.top = `${topdist2}px`;
        }
    } 
    else
    {
        vb++;
        quan.innerHTML = vb;
        price.innerHTML = a*vb;
    }
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
}
function notmyfunction1()
{
    let col1 = document.getElementsByClassName("itemelements")[0];
    let col2 = document.getElementsByClassName("pricematter")[0];
    let col3 = document.getElementsByClassName("quantitymatter")[0];
    let quan = document.getElementsByClassName("quantity")[0];
    let price = document.getElementsByClassName("price")[0];
    col1.style.display = "none";
    col2.style.display = "none";
    col3.style.display = "none";
    pos--;
    var topdist = 100+90*pos;
    totalprice.style.top = `${topdist}px`;
    paybutton.style.top = `${topdist}px`;
    vb=0;
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
    if(window.innerWidth<=370)
    {
        pos1--;
        pos2--;
        var topdist1 = pos1*90;
        var topdist2 = 150+pos2*90;
        paydiv.style.top = `${topdist1}px`;
        paybutton.style.top = `${topdist2}px`;
    }
}
function myfunction2()
{
    let col1 = document.getElementsByClassName("itemelements")[1];
    let col2 = document.getElementsByClassName("pricematter")[1];
    let col3 = document.getElementsByClassName("quantitymatter")[1];
    let quan = document.getElementsByClassName("quantity")[1];
    let price = document.getElementsByClassName("price")[1];
    price.innerHTML = b;
    if(hb == 0)
    {
        hb++;
        price.innerHTML = b*hb;
        quan.innerHTML = hb;
        col1.style.display = "block";
        col2.style.display = "block";
        col3.style.display = "block";
        pos++;
        var topdist = 100+90*pos;
        totalprice.style.top = `${topdist}px`;
        paybutton.style.top = `${topdist}px`;
        if(window.innerWidth<=370)
        {
            pos1++;
            pos2++;
            var topdist1 = pos1*90;
            var topdist2 = 150+pos2*90;
            paydiv.style.top = `${topdist1}px`;
            paybutton.style.top = `${topdist2}px`;
        }
    } 
    else
    {
        hb++;
        quan.innerHTML = hb;
        price.innerHTML = b*hb;
    }
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
}
function notmyfunction2()
{
    let col1 = document.getElementsByClassName("itemelements")[1];
    let col2 = document.getElementsByClassName("pricematter")[1];
    let col3 = document.getElementsByClassName("quantitymatter")[1];
    col1.style.display = "none";
    col2.style.display = "none";
    col3.style.display = "none";
    pos--;
    var topdist = 100+90*pos;
    totalprice.style.top = `${topdist}px`;
    paybutton.style.top = `${topdist}px`;
    hb=0;
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
    if(window.innerWidth<=370)
    {
        pos1--;
        pos2--;
        var topdist1 = pos1*90;
        var topdist2 = 150+pos2*90;
        paydiv.style.top = `${topdist1}px`;
        paybutton.style.top = `${topdist2}px`;
    }
}
function myfunction3()
{
    let col1 = document.getElementsByClassName("itemelements")[2];
    let col2 = document.getElementsByClassName("pricematter")[2];
    let col3 = document.getElementsByClassName("quantitymatter")[2];
    let quan = document.getElementsByClassName("quantity")[2];
    let price = document.getElementsByClassName("price")[2];
    price.innerHTML = sb;
    if(sb == 0)
    {
        sb++;
        price.innerHTML = c*sb;
        quan.innerHTML = sb;
        col1.style.display = "block";
        col2.style.display = "block";
        col3.style.display = "block";
        pos++;
        var topdist = 100+90*pos;
        totalprice.style.top = `${topdist}px`;
        paybutton.style.top = `${topdist}px`;
        if(window.innerWidth<=370)
        {
            pos1++;
            pos2++;
            var topdist1 = pos1*90;
            var topdist2 = 150+pos2*90;
            paydiv.style.top = `${topdist1}px`;
            paybutton.style.top = `${topdist2}px`;
        }
    } 
    else
    {
        sb++;
        price.innerHTML = c*sb;
        quan.innerHTML = sb;
    }
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
}
function notmyfunction3()
{
    let col1 = document.getElementsByClassName("itemelements")[2];
    let col2 = document.getElementsByClassName("pricematter")[2];
    let col3 = document.getElementsByClassName("quantitymatter")[2];
    col1.style.display = "none";
    col2.style.display = "none";
    col3.style.display = "none";
    pos--;
    var topdist = 100+90*pos;
    totalprice.style.top = `${topdist}px`;
    paybutton.style.top = `${topdist}px`;
    sb=0;
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
    if(window.innerWidth<=370)
    {
        pos1--;
        pos2--;
        var topdist1 = pos1*90;
        var topdist2 = 150+pos2*90;
        paydiv.style.top = `${topdist1}px`;
        paybutton.style.top = `${topdist2}px`;
    }
}
function myfunction4()
{
    let col1 = document.getElementsByClassName("itemelements")[3];
    let col2 = document.getElementsByClassName("pricematter")[3];
    let col3 = document.getElementsByClassName("quantitymatter")[3];
    let quan = document.getElementsByClassName("quantity")[3];
    let price = document.getElementsByClassName("price")[3];
    price.innerHTML = d;
    if(fb == 0)
    {
        fb++;
        quan.innerHTML = fb;
        price.innerHTML = d*fb;
        col1.style.display = "block";
        col2.style.display = "block";
        col3.style.display = "block";
        pos++;
        var topdist = 100+90*pos;
        totalprice.style.top = `${topdist}px`;
        paybutton.style.top = `${topdist}px`;
        if(window.innerWidth<=370)
        {
            pos1++;
            pos2++;
            var topdist1 = pos1*90;
            var topdist2 = 150+pos2*90;
            paydiv.style.top = `${topdist1}px`;
            paybutton.style.top = `${topdist2}px`;
        }
    } 
    else
    {
        fb++;
        price.innerHTML = d*fb;
        quan.innerHTML = fb;
    }
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
}
function notmyfunction4()
{
    let col1 = document.getElementsByClassName("itemelements")[3];
    let col2 = document.getElementsByClassName("pricematter")[3];
    let col3 = document.getElementsByClassName("quantitymatter")[3];
    col1.style.display = "none";
    col2.style.display = "none";
    col3.style.display = "none";
    pos--;
    var topdist = 100+90*pos;
    totalprice.style.top = `${topdist}px`;
    paybutton.style.top = `${topdist}px`;
    fb=0;
    let totalpr = a*vb + b*hb + c*sb + d*fb;
    totalprice.innerHTML = "TOTAL PRICE = " + totalpr;
    if(window.innerWidth<=370)
    {
        pos1--;
        pos2--;
        var topdist1 = pos1*90;
        var topdist2 = 150+pos2*90;
        paydiv.style.top = `${topdist1}px`;
        paybutton.style.top = `${topdist2}px`;
    }
}
