---
id: querySearch
title: Keyword Search API User Manual
---

## General Search English


#### System Description 

Search API provides an interface to the Search Engine used on NXP.com. Applications can fetch data from the Search Engine using Search API. 

#### Interfaces to External Components 

Search API interacts with the Search Engine. Currently, SearchAPI uses the Google Search Appliance (GSA).  This technology will be retired by Google in September, 2018 and will be replaced by a new search engine 

 

#### User Profile and Intended Audience 

Search API can be used by the publishing /development team to display data from the search engine. Users can use the parameters supported by the Search API to filter results.  

 

#### High Level Architecture 

 

## End Points 

### URL Structure 

Following are the types of URL that can be used to get data from the Search API 

- Get Count:
This URL will return the count of the number of the results returned from the Search API. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/resultCount/{keyword=kinetis} 
```

- Get Filters:
This URL will return only the filter section from the Search API. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/filters/{keyword=kinetis} 
```

- Get Results:-
This URL will return only the result section from the Search API. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis} 
```

- Get All Results (Filters + Results):
This URL will return results and filter data from the Search API. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis} 
```

- Get Suggestions for a keyword 
This URL will return suggestions for a keyword. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/suggestions/{keyword=greenhill} 
```
 

### Solr Urls 

To get the data from Solr, pass searchengine=solr as a parameter. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/resultCount/{keyword=kinetis&searchengine=solr} 
```
As, Solr Search Engine is not ready, the output will be {“message” : ”Solr Search Engine is not ready”}. 

 

 

### Environment Variables 

**Params**:collection  <br/>
**Possible Values**:  
- products 
- documents 
- softwaretools 
- videos 
- trainings 
- blog 
- community 
- solutions 
- devices 
- partners 
- parametric 

**Default Values**: all <br/>
**Comments**: 
Collection defines the Asset Type used to return results<br/>
**Note** : Either collection or keyword is mandatory in an api call.

---

**Params**: fields <br/>
**Possible Values**: any <br/>
**Default Values**: *  <br/>
**Comments**: fields defines the metadata to be displayed in results section <br/>

---

**Params**: keyword <br/>
**Possible Values**: any <br/>
**Default Values**: - <br/>
**Comments**: Keyword defines the term to be searched within the metadata.  <br/>
**Note**: Either collection or keyword is mandatory in an api call. 
If we need api call without collection then use keyword=*:*
---

**Params**: max <br/>
**Possible Values**:
- any 
- Maximum value that can be used is 1000 
- max=10
-  
**Default Values**: 10 <br/>
**Comments**: max defines the number of results returned in response. <br/>

---
**Params**: language <br/>
**Possible Values**:
- en 
- cn
  
**Default Values**: en <br/>
**Comments**:language defines the language collection from where results are going to be retrieved <br/>

---
**Params**: sorting <br/>
**Possible Values**:
- <"metadataname">.asc
- <"metadataname">.desc
  
**Default Values**: date <br/>
**Comments**:pagination defines the start index position from where the query will retrieve results. 
The maximum number of results available for a query is 1,000, i.e., the value of the pagination parameter added to the value of the max parameter cannot exceed 1,000.  <br/>

---
**Params**: query <br/>
**Possible Values**: query=metadata3>>*nxp*::metadata5>>*kinetis* <br/>
**Default Values**: - <br/>
**Comments**: query defines keyword that can be used to filter against specific metadata.  
Pairs of attributes are separated by double colon when an AND statements is required (::) and a pipe when an OR statement is required (|) – each pair of attributes is separated by a dot (>>) at the same time. 
star wildcard (*) can be used to cover a wider range of results. <br/>

---
**Params**: depth <br/>
**Possible Values**: 1, 2, … <br/>
**Default Values**: - <br/>
**Comments**: Depth parameters defines depth of the Taxonomy. <br/>

---
**Params**: siblings <br/>
**Possible Values**: Default is true ,else send false <br/>
**Default Values**: true <br/>
**Comments**: Siblings parameter is used to hide top level siblings , to display the filters in the left panel.  <br/>

---
**Params**: parameters <br/>
**Possible Values**: 
- deviceTax
- applicationTax
- typeTax
- Vendor
- content_language
- durationTime
- TrainingLaunchLanguage
- courseLevel
- country
- cores
- OperatingSystems
- ParaHeader Short Code 
**Default Values**: - <br/>
**Comments**: parameter defines the metadata to be displayed in filter section  
If the parameter is not present, all existing parameters will be retrieved automatically. 
If the parameter is present, the user needs to specify each parameter name to be retrieved. Each parameter name needs to be separated by a dot (.). <br/>

---
**Params**: fieldsnotpresent <br/>
**Possible Values**: fieldsnotpresent=metadata1.metadata2 <br/>
**Default Values**: - <br/>
**Comments**: fieldnotpresent defines metadata should not present in search results record. Mulitple metadatas needs to be separated by a dot (.). <br/>

---
**Params**: notQuery <br/>
**Possible Values**: notQuery=metadata>>keyword or notQuery=metadata>>keyword::metadata>>keyword  <br/>
**Default Values**: - <br/>
**Comments**: notQuery defines keyword that can be used to filter should not present in against specific metadata. <br/>

---

## Sample URL 
1. Ability to pass the collection name to the Search API to filter results 

```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=products} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=documents} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=softwaretools} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=videos} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=trainings} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=blog} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=partners} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=community} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=devices} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{collection=parametric&query=productCode>>K50_72} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=solutions} 
```
 

2. Ability to pass metadata names in the query to the Search API to get only selected metadata in the results. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=products&fields=Description.code.search_summary.Asset_Id.PageTitle.Order} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&fields=templateType.Description.Asset_Type} 
```

3. Ability to pass the keyword name to the Search API to get results based on the keyword. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetics} 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=i.mx} 
```


4. Ability to limit the number of results returned from the Search API 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=i.mx&max=5} 
```

5. Ability to set the start position and the number of results from the start position in the query to Search API 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=i.mx&start=10} 
```

6. Ability to pass the language collection name to the Search API to get results from that collection. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=products&language=cn} 
```

7. Ability to pass the metadata name to the Search API to sort results based on the metadata 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&collection=products&sorting=code.asc&fields=Description.code} 
```

8. Ability to search for multiple values from a single metadata 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis&query=code>>AN11845~~AN4407} 
```

9. Ability to filter results by querying for a keyword against specific meta data 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis&query=Keywords>>microcontroller} 
```
10. Ability to filter results by querying against several meta data 

:: used for AND operation  

http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis&query=Keywords>>microcontroller::code>>AN4407} 

| used for OR operation 

http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis&query=prodCode>>PN7120|type>>Fact%20Sheet&max=150} 

* used for wildcard 

http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis&query=type>>*eet*} 

11. Ability to limit the metadata result in filter JSON 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/filters/{collection=partners&parameters=country.Vendor} 
```

12. As an IT Architect, When Depth =1 parameter is passed in Search API, must return higher level filters. 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/%7Bcollection=partners&depth=1&keyword=greenhills%7D 
```
 
13. As an IT Architect, When siblings= false and query parameter is passed, Siblings of queried category should not be in shown in returned filter json . 
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/filters/%7Bcollection=partners&siblings=false&query=typeHirarchy>>Development%20Tool%20Providers&fields=search_summary%7D 
```
    
14. Ability to Query Solr for fields not present or blank for a record. Below query returns all software&Tools which does not have search_summary and keywords fields present or empty. 
```
https://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{collection=softwaretools&fieldsnotpresent=search_summary.keywords}  
```

15. Ability to query Solr for a field not equal to a value. 
```
https://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{collection=products&notQuery=code%3E%3EMMA8491Q} 

 ```

 
## Sample Output 

For URL :
```
http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/%7Bkeyword=codewarrior&collection=products%7D&max=1 
```
```
{
  "params": {
    "filter": "asset_type:Products",
    "facet.field": "[asset_type, devicetax_ms, applicationtax_ms]",
    "getFields": "*,[elevated]",
    "qf": "code^11.0 code_all^11.0 url_s^1.0 title^7.0 name_s^7.0 text_wdl^1.0 _text_^1.0 nc12_ms^1.0 opids_ms^1.0 associatedsalesitem_ms^1.0 text_par^1.0",
    "lang_cd": "en",
    "start": "0",
    "keyword": "codewarrior",
    "rows": "1",
    "facet": "true",
    "solrquery": "q\u003dcodewarrior\u0026fl\u003d*,[elevated]\u0026fq\u003dasset_type:Products\u0026rows\u003d1\u0026start\u003d0\u0026facet.field\u003dasset_type\u0026facet.field\u003ddevicetax_ms\u0026facet.field\u003dapplicationtax_ms\u0026facet\u003dtrue\u0026facet.mincount\u003d1\u0026qf\u003dcode^11.0+code_all^11.0+url_s^1.0+title^7.0+name_s^7.0+text_wdl^1.0+_text_^1.0+nc12_ms^1.0+opids_ms^1.0+associatedsalesitem_ms^1.0+text_par^1.0\u0026bq\u003dasset_type:Webpages^5.0+asset_type:Products^5.0+sub_asset_type_s:TSP^5.0+asset_type:Applications^1.0+name_s:Archived^-100.0+archived_s:1^-200.0+prodtypecategory_ms:Archived^-200.0+asset_type:Videos^-30.0+asset_type:Documents^-500.0+asset_type:Trainings^-40.0+asset_type:blog^-100.0+sub_asset_type_s:UNCR_COLLATERAL^-500.0\u0026hl.fl\u003dsearch_summary,description_s,metatag.description,content,name_s\u0026hl\u003dtrue\u0026hl.alternateField\u003d\u0026defType\u003dedismax",
    "bq": "asset_type:Webpages^5.0 asset_type:Products^5.0 sub_asset_type_s:TSP^5.0 asset_type:Applications^1.0 name_s:Archived^-100.0 archived_s:1^-200.0 prodtypecategory_ms:Archived^-200.0 asset_type:Videos^-30.0 asset_type:Documents^-500.0 asset_type:Trainings^-40.0 asset_type:blog^-100.0 sub_asset_type_s:UNCR_COLLATERAL^-500.0"
  },
  "totalcount": 70,
  "results": [
    {
      "indentation": 0,
      "url": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135",
      "escapedUrl": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135",
      "title": "56F8335_8135|Digital Signal Controllers | NXP",
      "rating": 0,
      "summary": "NXP\u0026lt;sup\u0026gt;\u0026amp;#174;\u0026lt;\u0026#x2F;sup\u0026gt; 56F8335\u0026#x2F;8135 DSCs combine digital signal processing and microcontroller functionalities on a single chip, with a flexible set of peripherals.",
      "language": "en",
      "metaData": {
        "date": "Tue Apr 23 22:07:36 MST 2019",
        "PageTitle": "Digital Signal Controllers for Auto and Industrial Applications",
        "name_tks": "Digital Signal Controllers for Auto and Industrial Applications",
        "text_par": [
          "Digital Signal Controllers for Auto and Industrial Applications",
          "Processors and Microcontrollers_More Processors",
          "Processors and Microcontrollers_More Processors_Digital Signal Controllers (DSC)",
          "Processors and Microcontrollers",
          "Motor Control",
          "MC56F8135VFGE",
          "MC56F8335MFGE",
          "MC56F8335VFGER",
          "MC56F8335VFGE"
        ],
        "opCount": "3",
        "prodCode": [
          "56F8335_8135",
          "CW-56800E-DSC",
          "MC56F8367EVME",
          "RD56F8300LCSM",
          "RD56F8300OUPS",
          "RD56F8300SMPS",
          "RD56F8300FR",
          "DSP56800EQUICKSTART",
          "CYCLONEMAX_PE",
          "NXPCAN",
          "RTCESL",
          "CW-MCU10",
          "USBTAP_DSC",
          "PE_CDE",
          "MCATSW",
          "APIEC60730"
        ],
        "search_summary": "NXP\u003csup\u003e\u0026#174;\u003c/sup\u003e 56F8335/8135 DSCs combine digital signal processing and microcontroller functionalities on a single chip, with a flexible set of peripherals.",
        "Asset_Id": "1203695002898715371495",
        "type": [
          "text/html",
          "text",
          "html"
        ],
        "associatedPartDetails": [
          "MC56F8135VFGE:::16-bit DSC, 56800E core, 64KB Flash, 40MHz, QFP 128:::Active:::Device Part",
          "MC56F8335MFGE:::16-bit DSC, 56800E core, 64KB Flash, 60MHz, QFP 128:::Active:::Device Part",
          "MC56F8335VFGE:::16-bit DSC, 56800E core, 64KB Flash, 60MHz, QFP 128:::Active:::Device Part"
        ],
        "DataSheets": "true",
        "archived": "0",
        "feedtype_s": "crawl",
        "Description": "\u003cp\u003e\u0026#10;NXP\u003csup\u003e\u0026#174;\u003c/sup\u003e 56F8335 and 56F8135 digital signal controllers belong to the 56800E core-based DSC family. They combine digital signal processing and microcontroller functionalities on a single chip, with a flexible set of peripherals.\u0026#10;\u003c/p\u003e\u0026#10;\u003cul\u003e\u0026#10;\u003cli\u003eOn-chip integration and ease of implementation help to speed development, lower component count, and significantly reduce system cost\u003c/li\u003e\u0026#10;\u003cli\u003eSimplifies designs while promoting compliance with safety regulations\u003c/li\u003e\u0026#10;\u003cli\u003eSupported by robust development tools to simplify and accelerate time-to-market\u003c/li\u003e\u0026#10;\u003c/ul\u003e",
        "segment": "20190508155517",
        "OG:Image": "",
        "prodTypeCategory": [
          "Processors and Microcontrollers_More Processors",
          "Processors and Microcontrollers_More Processors_Digital Signal Controllers (DSC)",
          "Processors and Microcontrollers"
        ],
        "sourceFlag": "0",
        "Order": "Buy Through Distributor",
        "metatag.description": "NXP\u003csup\u003e®\u003c/sup\u003e 56F8335/8135 DSCs combine digital signal processing and microcontroller functionalities on a single chip, with a flexible set of peripherals.",
        "blockDiagramIdxUrl": "https://cache-uat.freescale.com/assets/images/en/block-diagrams/56F8335X-8135X_BD.gif",
        "Documents": "true",
        "recordURL": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135",
        "dataSheetURL": "https://uat.freescale.com/docs/en/data-sheet/MC56F8335.pdf?pspll\u003d1",
        "tstamp": "Wed May 08 15:58:05 MST 2019",
        "applicationTax": "c1420",
        "packageQualityUrl": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135?tab\u003dPackage_Quality_Tab\u0026amp;pspll\u003d1",
        "boost": "Infinity",
        "DeviceClassification": "Active",
        "metatag.templateType": "devices",
        "code": "56F8335_8135",
        "code_wdl": "56F8335_8135",
        "code_s": "56F8335_8135",
        "code_all": "56F8335_8135",
        "Asset_Type": "Products",
        "nc12": [
          "935316557557",
          "935323954557",
          "935318991518",
          "935318991557"
        ],
        "Info": "DataSheet,PartTable",
        "title_wdl": "56F8335_8135|Digital Signal Controllers | NXP",
        "title_tks": "56F8335_8135|Digital Signal Controllers | NXP",
        "breadCrum": "https://uat.freescale.com/support/developer-resources/run-time-software/dsc-developer-resources:DSC-DEVELOPER?\u0026amp;tid\u003dvan/dsc/developer##DSC Developer Resources, https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers:Digital-Signal-Controllers##Digital Signal Controllers, https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus:MORE-PROCESSORS##Additional Processors and MCUs, https://uat.freescale.com/products/processors-and-microcontrollers:MICROCONTROLLERS-AND-PROCESSORS##Processors and Microcontrollers, https://uat.freescale.com/webapp/sps/library/prod_lib.jsp##Products",
        "buyParaURL": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135?fpsp\u003d1\u0026tab\u003dBuy_Parametric_Tab",
        "digest": "08bcf13bddff735fe41696410df1a9d3",
        "documentationURL": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135?fpsp\u003d1\u0026tab\u003dDocumentation_Tab",
        "deviceTax": [
          "c731_c382_c85",
          "c731_c382",
          "c731"
        ],
        "toolsTabURL": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135?fpsp\u003d1\u0026tab\u003dDesign_Tools_Tab",
        "apppTypeCategory": "Motor Control",
        "associatedSalesItem": [
          "MC56F8135VFGE",
          "MC56F8335MFGE",
          "MC56F8335VFGER",
          "MC56F8335VFGE"
        ],
        "url_s": "https://uat.freescale.com/products/processors-and-microcontrollers/additional-processors-and-mcus/digital-signal-controllers/digital-signal-controllers-for-auto-and-industrial-applications:56F8335_8135",
        "OPIDS": [
          "MC56F8135VFGE",
          "MC56F8335MFGE",
          "MC56F8335VFGE"
        ],
        "PackageQuality": "true",
        "Software and Tools": "true",
        "sc11": "scv235",
        "Buy/Specifications": "true",
        "SeoTitle": "56F8335_8135|Digital Signal Controllers",
        "featured_sort": "56F8335_8135",
        "customcrawltime_s": "2019-05-08 17:18:49",
        "metatag.keywords": "56F835/8135, 56800E core, 64 KB on-chip Flash memory, pulse width modulation (PWM), analog-to-digital converter (ADC), timer channels, quadrature decoders",
        "ModifiedDate": "23 Apr 2019",
        "_version_": "1633011535280340992",
        "[elevated]": "false"
      }
    }
  ],
  "filters": [
    {
      "data": "Asset_Type",
      "name": "Asset_Type",
      "depth": 0,
      "attr": {
        "selected": false
      },
      "children": [
        {
          "data": "products",
          "name": "products",
          "depth": 1,
          "attr": {
            "shortCode": "products",
            "name": "products",
            "nameEn": "products",
            "count": "70",
            "link": "products",
            "selected": false
          },
          "children": []
        },
        {
          "data": "softwaretools",
          "name": "softwaretools",
          "depth": 1,
          "attr": {
            "shortCode": "softwaretools",
            "name": "softwaretools",
            "nameEn": "softwaretools",
            "count": "2",
            "link": "softwaretools",
            "selected": false
          },
          "children": []
        }
      ]
    },
    {
      "data": "Product Categories",
      "name": "deviceTax",
      "depth": 0,
      "attr": {
        "selected": false
      },
      "children": [
        {
          "data": "c731",
          "name": "c731",
          "depth": 1,
          "attr": {
            "shortCode": "c731",
            "name": "Processors and Microcontrollers",
            "nameEn": "Processors and Microcontrollers",
            "count": "55",
            "link": "c731",
            "selected": false
          },
          "children": [
            {
              "data": "c382",
              "name": "c382",
              "depth": 2,
              "attr": {
                "shortCode": "c382",
                "name": "More Processors",
                "nameEn": "More Processors",
                "count": "24",
                "link": "c731_c382",
                "selected": false
              },
              "children": [
                {
                  "data": "c85",
                  "name": "c85",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c85",
                    "name": "Digital Signal Controllers (DSC)",
                    "nameEn": "Digital Signal Controllers (DSC)",
                    "count": "10",
                    "link": "c731_c382_c85",
                    "selected": false
                  },
                  "children": []
                },
                {
                  "data": "c754",
                  "name": "c754",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c754",
                    "name": "8/16-bit MCUs",
                    "nameEn": "8/16-bit MCUs",
                    "count": "9",
                    "link": "c731_c382_c754",
                    "selected": false
                  },
                  "children": [
                    {
                      "data": "c262",
                      "name": "c262",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c262",
                        "name": "16-bit S12 MagniV",
                        "nameEn": "16-bit S12 MagniV",
                        "count": "4",
                        "link": "c731_c382_c754_c262",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c259",
                      "name": "c259",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c259",
                        "name": "8-bit S08",
                        "nameEn": "8-bit S08",
                        "count": "3",
                        "link": "c731_c382_c754_c259",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c117",
                      "name": "c117",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c117",
                        "name": "16-bit HCS12 \u0026amp; S12X",
                        "nameEn": "16-bit HCS12 \u0026amp; S12X",
                        "count": "1",
                        "link": "c731_c382_c754_c117",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c1487",
                      "name": "c1487",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c1487",
                        "name": "8-bit Legacy MCUs",
                        "nameEn": "8-bit Legacy MCUs",
                        "count": "1",
                        "link": "c731_c382_c754_c1487",
                        "selected": false
                      },
                      "children": []
                    }
                  ]
                },
                {
                  "data": "c63",
                  "name": "c63",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c63",
                    "name": "ColdFire+/ColdFire MCUs/MPUs",
                    "nameEn": "ColdFire+/ColdFire MCUs/MPUs",
                    "count": "5",
                    "link": "c731_c382_c63",
                    "selected": false
                  },
                  "children": [
                    {
                      "data": "c58",
                      "name": "c58",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c58",
                        "name": "ColdFire MCUs",
                        "nameEn": "ColdFire MCUs",
                        "count": "2",
                        "link": "c731_c382_c63_c58",
                        "selected": false
                      },
                      "children": [
                        {
                          "data": "c294",
                          "name": "c294",
                          "depth": 5,
                          "attr": {
                            "shortCode": "c294",
                            "name": "V1 MCU",
                            "nameEn": "V1 MCU",
                            "count": "2",
                            "link": "c731_c382_c63_c58_c294",
                            "selected": false
                          },
                          "children": []
                        }
                      ]
                    },
                    {
                      "data": "c62",
                      "name": "c62",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c62",
                        "name": "ColdFire+ MCUs",
                        "nameEn": "ColdFire+ MCUs",
                        "count": "2",
                        "link": "c731_c382_c63_c62",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c61",
                      "name": "c61",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c61",
                        "name": "ColdFire MPUs",
                        "nameEn": "ColdFire MPUs",
                        "count": "1",
                        "link": "c731_c382_c63_c61",
                        "selected": false
                      },
                      "children": [
                        {
                          "data": "c298",
                          "name": "c298",
                          "depth": 5,
                          "attr": {
                            "shortCode": "c298",
                            "name": "V4 MPU",
                            "nameEn": "V4 MPU",
                            "count": "1",
                            "link": "c731_c382_c63_c61_c298",
                            "selected": false
                          },
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "data": "c380",
              "name": "c380",
              "depth": 2,
              "attr": {
                "shortCode": "c380",
                "name": "Arm Processors",
                "nameEn": "Arm Processors",
                "count": "19",
                "link": "c731_c380",
                "selected": false
              },
              "children": [
                {
                  "data": "c448",
                  "name": "c448",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c448",
                    "name": "QorIQ ARM Processors",
                    "nameEn": "QorIQ ARM Processors",
                    "count": "13",
                    "link": "c731_c380_c448",
                    "selected": false
                  },
                  "children": []
                },
                {
                  "data": "c173",
                  "name": "c173",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c173",
                    "name": "Kinetis ARM Cortex-M MCUs",
                    "nameEn": "Kinetis ARM Cortex-M MCUs",
                    "count": "6",
                    "link": "c731_c380_c173",
                    "selected": false
                  },
                  "children": [
                    {
                      "data": "c93",
                      "name": "c93",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c93",
                        "name": "E Series",
                        "nameEn": "E Series",
                        "count": "4",
                        "link": "c731_c380_c173_c93",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c187",
                      "name": "c187",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c187",
                        "name": "M Series",
                        "nameEn": "M Series",
                        "count": "2",
                        "link": "c731_c380_c173_c187",
                        "selected": false
                      },
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "data": "c381",
              "name": "c381",
              "depth": 2,
              "attr": {
                "shortCode": "c381",
                "name": "Power Architecture",
                "nameEn": "Power Architecture",
                "count": "13",
                "link": "c731_c381",
                "selected": false
              },
              "children": [
                {
                  "data": "c248",
                  "name": "c248",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c248",
                    "name": "MPC5xxx/5xxx 32-bit MCUs",
                    "nameEn": "MPC5xxx/5xxx 32-bit MCUs",
                    "count": "12",
                    "link": "c731_c381_c248",
                    "selected": false
                  },
                  "children": [
                    {
                      "data": "c246",
                      "name": "c246",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c246",
                        "name": "MPC56xx MCUs",
                        "nameEn": "MPC56xx MCUs",
                        "count": "12",
                        "link": "c731_c381_c248_c246",
                        "selected": false
                      },
                      "children": []
                    }
                  ]
                },
                {
                  "data": "c240",
                  "name": "c240",
                  "depth": 3,
                  "attr": {
                    "shortCode": "c240",
                    "name": "QorIQ Platforms",
                    "nameEn": "QorIQ Platforms",
                    "count": "1",
                    "link": "c731_c381_c240",
                    "selected": false
                  },
                  "children": [
                    {
                      "data": "c1401",
                      "name": "c1401",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c1401",
                        "name": "P Series",
                        "nameEn": "P Series",
                        "count": "1",
                        "link": "c731_c381_c240_c1401",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c243",
                      "name": "c243",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c243",
                        "name": "QorIQ Qonverge",
                        "nameEn": "QorIQ Qonverge",
                        "count": "1",
                        "link": "c731_c381_c240_c243",
                        "selected": false
                      },
                      "children": []
                    },
                    {
                      "data": "c449",
                      "name": "c449",
                      "depth": 4,
                      "attr": {
                        "shortCode": "c449",
                        "name": "T Series",
                        "nameEn": "T Series",
                        "count": "1",
                        "link": "c731_c381_c240_c449",
                        "selected": false
                      },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "data": "c32",
          "name": "c32",
          "depth": 1,
          "attr": {
            "shortCode": "c32",
            "name": "Archived",
            "nameEn": "Archived",
            "count": "2",
            "link": "c32",
            "selected": false
          },
          "children": []
        }
      ]
    },
    {
      "data": "Application Categories",
      "name": "applicationTax",
      "depth": 0,
      "attr": {
        "selected": false
      },
      "children": [
        {
          "data": "c36",
          "name": "c36",
          "depth": 1,
          "attr": {
            "shortCode": "c36",
            "name": "Automotive",
            "nameEn": "Automotive",
            "count": "19",
            "link": "c36",
            "selected": false
          },
          "children": [
            {
              "data": "c154",
              "name": "c154",
              "depth": 2,
              "attr": {
                "shortCode": "c154",
                "name": "Infotainment",
                "nameEn": "Infotainment",
                "count": "4",
                "link": "c36_c154",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c42",
              "name": "c42",
              "depth": 2,
              "attr": {
                "shortCode": "c42",
                "name": "Body \u0026amp; Comfort",
                "nameEn": "Body \u0026amp; Comfort",
                "count": "3",
                "link": "c36_c42",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c22",
              "name": "c22",
              "depth": 2,
              "attr": {
                "shortCode": "c22",
                "name": "Driver Replacement/ADAS",
                "nameEn": "Driver Replacement/ADAS",
                "count": "2",
                "link": "c36_c22",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c1473",
              "name": "c1473",
              "depth": 2,
              "attr": {
                "shortCode": "c1473",
                "name": "In-Vehicle Connectivity",
                "nameEn": "In-Vehicle Connectivity",
                "count": "1",
                "link": "c36_c1473",
                "selected": false
              },
              "children": []
            }
          ]
        },
        {
          "data": "c209",
          "name": "c209",
          "depth": 1,
          "attr": {
            "shortCode": "c209",
            "name": "Networking",
            "nameEn": "Networking",
            "count": "15",
            "link": "c209",
            "selected": false
          },
          "children": []
        },
        {
          "data": "c148",
          "name": "c148",
          "depth": 1,
          "attr": {
            "shortCode": "c148",
            "name": "Industrial",
            "nameEn": "Industrial",
            "count": "13",
            "link": "c148",
            "selected": false
          },
          "children": [
            {
              "data": "c118",
              "name": "c118",
              "depth": 2,
              "attr": {
                "shortCode": "c118",
                "name": "Medical Electronics",
                "nameEn": "Medical Electronics",
                "count": "7",
                "link": "c148_c118",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c101",
              "name": "c101",
              "depth": 2,
              "attr": {
                "shortCode": "c101",
                "name": "Factory Automation",
                "nameEn": "Factory Automation",
                "count": "3",
                "link": "c148_c101",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c1421",
              "name": "c1421",
              "depth": 2,
              "attr": {
                "shortCode": "c1421",
                "name": "Drones \u0026amp; Robots",
                "nameEn": "Drones \u0026amp; Robots",
                "count": "2",
                "link": "c148_c1421",
                "selected": false
              },
              "children": []
            }
          ]
        },
        {
          "data": "c269",
          "name": "c269",
          "depth": 1,
          "attr": {
            "shortCode": "c269",
            "name": "Power \u0026amp; Energy",
            "nameEn": "Power \u0026amp; Energy",
            "count": "10",
            "link": "c269",
            "selected": false
          },
          "children": [
            {
              "data": "c1561",
              "name": "c1561",
              "depth": 2,
              "attr": {
                "shortCode": "c1561",
                "name": "Energy Generation and Transformation",
                "nameEn": "Energy Generation and Transformation",
                "count": "6",
                "link": "c269_c1561",
                "selected": false
              },
              "children": []
            },
            {
              "data": "c1563",
              "name": "c1563",
              "depth": 2,
              "attr": {
                "shortCode": "c1563",
                "name": "Power Management and Metering",
                "nameEn": "Power Management and Metering",
                "count": "4",
                "link": "c269_c1563",
                "selected": false
              },
              "children": []
            }
          ]
        },
        {
          "data": "c1420",
          "name": "c1420",
          "depth": 1,
          "attr": {
            "shortCode": "c1420",
            "name": "Motor Control",
            "nameEn": "Motor Control",
            "count": "9",
            "link": "c1420",
            "selected": false
          },
          "children": []
        },
        {
          "data": "c73",
          "name": "c73",
          "depth": 1,
          "attr": {
            "shortCode": "c73",
            "name": "Consumer Electronics",
            "nameEn": "Consumer Electronics",
            "count": "6",
            "link": "c73",
            "selected": false
          },
          "children": [
            {
              "data": "c122",
              "name": "c122",
              "depth": 2,
              "attr": {
                "shortCode": "c122",
                "name": "Home Appliances",
                "nameEn": "Home Appliances",
                "count": "4",
                "link": "c73_c122",
                "selected": false
              },
              "children": []
            }
          ]
        }
      ]
    }
  ],
  "keymatch": []
}
```