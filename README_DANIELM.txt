http://www.odata.org/odata-services/

JaySvcUtil -m http://services.odata.org/V4/Northwind/Northwind.svc/$metadata -o nw.js -t nw.d.ts
JaySvcUtil -m http://localhost:8080/odata-server-sample-4.0.0-beta-02-RC01/cars.svc/$metadata -o cars.js -t cars.d.ts

JaySvcUtil -m http://spintheblack.cloudapp.net/odata4/public/vm/$metadata -o basplus.js -t basplus.d.ts
JaySvcUtil -m http://localhost:8080/odata4/public/vm/$metadata -o basplus.js -t basplus.d.ts

JaySvcUtil -m metadata.xml -o test.js -t test.d.ts

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:\temp"

REMOVE LAST 2 LINES AFTER GENERATION!!!
