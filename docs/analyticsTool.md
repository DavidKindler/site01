---
id: analyticsTool
title: Analytics Web Tools
---

## Introduction

The goal of analytics tools is to reduce the margin of error in the implementation of analytics calls in future projects and verify if we need extra effort is required by the React team or by the Analytics team.

## Tool usage
#### Pre-requirements
> 1. Data Collection file.
> 2. Links:
> 
> * [Analyzer Data Collection](http://10.112.102.92/spas/scripts/analytics/)
> * [Analytics Testing Tool](https://uat.freescale.com/pages/analytics-testing-tool:ANALYTICS-TESTING-TOOL)

### Analyzer Data Collection

##### Introduction
The objective of this tool is:
1. To generate analytics variables that React team needs to send with the parameters needed.
2. To create an ITAT document to help you validate if each analytics call is sending the correct values.
3. To generate JSON data with all the analytics calls needed to create unit tests.


## Analytics Testing Tool
1. Open your data collection
2. Identify which columns are the actions, the variable names and the variable values and which spreadsheet is located if there is more than 1 spreadsheet saved.

![Data Collection](./analytics-1.png "Data Collection")

3. Open [Analyzer Data Collection](http://10.112.102.92/spas/scripts/analytics/)
4. Click on Excel icon to select the data collection that you analyzed.

![Select Data Collection](./analytics-2.png "Select Data Collection")

5. Upload it.

6. Set up the columns of the event name, the variable name, and the variable value where are located in the spreadsheet.

![Columns](./analytics-3.png "Columns")

7.  What do you need?
    1.  As a React developer, you need to create a single object for each analytics call go to [**Object maker option**](#objectMaker)
    2.  As Analytics team, you need to validate each analytics call are generating correctly page action call and destination call if it's needed, go to [**JSON maker option**](#jsonMaker)
    3.  As a tester, you need a document to manage all the analytics calls and to know which parameters are involved, go to [**ITAT Document option**](#itatDocument)

## Object maker

![Object Maker](./analytics-4.png "Object Maker")
1. Click on the correct spreadsheet.
2. Find the action that you need
3. Copy the analytics object, and paste in your handler call.
4. Set up the parameters. Some of them are specified a default value **["MANUAL EFFORT REQUIRED"]**
   1. _call_: Select type of analytics call. It can be **event, exit or page**.
   2. _name_: Select name of analytics call. 
      1. If the call is receiving data from Search engine, please use **searchEvent**.
      2. If the link where is genereting the analytics call is from an result from Search engine, please use **searchlink**.
      3. If the call is linking to an order action, please use **orderButttonLink**.
      4. If the call is linking to same page or different section of that page, please use **event**.
   3. _pageActionContentFinding_: Doesn't need extra effort for now.
   4. _enableDwnldTracking_: Doesn't need extra effort for now.
   5. _eventPathing_: Select one of the options. It should be **string value**.
   6. _eventPageTemplateType_: You need to do an extra effort to know assetID of the page.
   7. _modalName_: The name of that section. It should be **string value**.
   8. _pageAction_: Select one of the options. It should be **string value**.
   9. _pageSubaction_: You need to do an extra effort to know the value of the anchort. It should be **string value**.
   10. _targetURL_: You need to do an extra effort to know the URL that is linking to. It should be **string value**.
   11. _destinationContentFinding_: Doesn't need extra effort for now.
   12. _destinationSubContentFinding_: Look at the data collection to know which value you have to send.
   13. _searchkeyword_: You need to do an extra effort to have the keyword if it's already set up. It should be **string value**.
   14. _searchResultPosition_: If the analytics call is coming from an result of Search engine, you need to send the position of that result. It should be **integer value**. This parameters is need but it's not coming from Search engine, please send 0.
   15. _resultCount_: You need to do an extra effort to have the total of the results that you received from Search engine. It should be **integer value**.
   16. _searchFilterList_: You need to do an extra effor to built an specific format. "[category]~[value]". It should be **string value**.

## ITAT Document

This option will be generating an ITAT Document that contains each page action with the parameters to test.

![ITAT Document](./analytics-5.png "ITAT Document")

## JSON maker

This option will be generating a JSON Object that contains all the page actions with the parameters to create unit tests that you are going to use in the [Analytics Testing Tool](https://uat.freescale.com/pages/analytics-testing-tool:ANALYTICS-TESTING-TOOL).

![JSON maker](./analytics-6.png "JSON maker")

## Analytics Testing Tool

#### Introduction
The objective of this tool is:
1. To generate the unit tests to test each call and to check it is generating a correct page action and a destination call if it's needed.

##### Instructions
1. Paste JSON Object that you copied before in Analytics Object input.
2. Select a type of link:
   1. If you want to open in a new tab if it's a third party link.
   2. If you want to open in the same tab.
3. Set up an example URL if you want to test a destination call.
4. Click on **Generate Test Link** to generate all the test links.

![Test links](./analytics-7.png "Test links")

#### Tool workflow
![Workflow](./analytics-workflow.png "Workflow")

### Benefits

* To make sure we're sending all the parameters of each analytics call according to Data Collection.
* To test before implementation that they're working properly or if we need an extra effort from Analytics team.

### What problem we are covering...

Through all the projects, we notice some issues could have been detected before release so we're covering that gray area.