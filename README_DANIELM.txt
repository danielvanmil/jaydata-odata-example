http://www.odata.org/odata-services/

JaySvcUtil -m http://services.odata.org/V4/Northwind/Northwind.svc
JaySvcUtil -m http://teiid903-stbcs.rhcloud.com//odata4/Basplus_vdb/Basplus_viewmodel/$metadata -o basplus.js -t basplus.d.ts
JaySvcUtil -m http://localhost:8080/odata-server-sample-4.0.0-beta-02-RC01/cars.svc/$metadata -o cars.js -t cars.d.ts
JaySvcUtil -m metadata.xml -o test.js -t test.d.ts
