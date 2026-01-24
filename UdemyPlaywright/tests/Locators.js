/*
1. if id is present 
css -> tagname#id or #id

2. if class attribute is present
css -> tagname.class or .id

3. write css based on any attribute
css -> [attribute = 'value'] 

4.write css with traversing from parent to child
css -> parenttagname >> childtagname

5. if needs to write the locator based on text
text = ' '

Two method to enter value
type or fill
latest version do not have type

to show paraly values use regex = [style* = 'none']

if there is no attributes can provide tagnames like link: a
find out the element from sequence 
await page.locator(".card-body a").nth(0).textContent()
*/
