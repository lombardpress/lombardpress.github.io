---
layout: post
title:  Creating an aggregated dataset from distributed sources - a report from the 2016 Basel meeting.
date:   2016-08-24
comments: true
---

The following is a report and summary of the main proposal discussed at the "Linked Data and the Medieval Scholastic Tradition," workshop held at the University of Basel in August 17-19, 2016.

# The Problem Domain

The Basel workshop was attended by representatives of several separate research projects based in Europe dealing with some aspect of the medieval scholastic tradition. These projects ranged from Sentences commentaries to Aristotelian commentaries to logical texts and and logical commentaries. Each group aims to create data and to display that data both in print and in various online formats.

The central problem we observed is that, because at present each group works fairly independently, each team has developed its own methods of 1) data input and creation, 2) data storage, and 3) and data display.

There are couple of notable problems with this approach.

First, this requires each group to construct a technology stack, that despite various differences, conforms to a fairly standard pattern. This results in several redundant technology stacks that are expensive and difficult to maintain. For example, each group is developing some kind of a web form or data input interface. Most groups are then storing this data in a traditional relational mysql database. Finally, each group is then developing a web display that queries this database.

Second, because each group is developing this data pipeline on a single isolated server, their data is effectively isolated from the data of other related research groups. This causes two further problems. This isolation means that each group is in many cases producing highly redundant data. If a group needs a prosopographical data, they have no choice but to create their own prosopography, even if another group has already created a similar prosopography which they store on their own isolated server. Secondly, because each research groups is dealing with a corner of a highly connected dataset, even when they are not producing redundant data, they are usually missing out on the opportunity to create and discover connections between their data and the data created by other groups.

Third and finally, because data creation interfaces, data storage, and data display interfaces are so tightly coupled, we are missing out the opportunity to create re-usable interfaces and modular software. In other words, at the present, the ability to make a great display application, requires someone to also set up her own storage solution and to population that database with her own data instead of simply being able to make a great display application using the data already being created by other groups.

We have summarized the basic problem of data siloing in the following graphic.

![data-silo-example](/assets/images/data-silo-example.png)

# A Proposal

The proposal presented at the Basel workshop aimed primarily at de-coupling the distinct tasks of data-creation, data-storage, and data-display, while still allowing individual projects complete autonomy with their own data.

The central proposal is to create RDF ID for every common resource within our common problem domain, and then to allow independent research groups to publish the data they have about this common resource according to a common data standard, such as a customized TEI schema or Open Annotation.

Groups that want their information pooled into a common dataset simply need to register these "data feeds" with a common registry. Using this registry, we can write a "build-script" that crawls all known resources about any resource and constructs a RDF dataset. This build-script would harvests key pieces of information about common resources as well as links to individual project datasets and other global data sources such as DBPedia and VIAF. Further, beyond merely aggregating known information, the build-script can also infer new connections that no individual group knows in isolation, but can be deduced from two different pieces information known by two previously isolated research groups. For example, if one groups knows that author X cites author Y, and another group knows that author Z cites author Y, the central dataset alone will know that author Y is cited by authors X and Z. This third assertion is something that can only be inferred when these two pieces of information, originally isolated from one another are brought together.

This RDF meta data can then function as switch board for all display applications. Display applications can query directly to the public SPARQL endpoint for information about the location of encoded transcriptions or prosopographical information. In this way, we create a common pool of information from the work of each independent research group. Likewise, each display application is no longer limited to the information stored in the local data storage, but has access to the pool of information known by the entire collective.

The below graphic illustrates how the data silos seen above have been transformed into a web criss-crossing connections.

![united-data-set-example](/assets/images/united-data-set-example.png)

Comments and feedback welcome.
