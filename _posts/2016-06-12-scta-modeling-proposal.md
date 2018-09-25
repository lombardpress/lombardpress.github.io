---
layout: post
title:  A SCTA Modeling Proposal
date:   2016-06-12
comments: true
tags: featured
redirect_from:
  - 2016/06/12/DTS-modeling-proposal
  - 2016/06/12/DTS-modeling-proposal/
  - 2016/06/12/dts-modeling-proposal
  - 2016/06/12/dts-modeling-proposal/
tags: depreciated
---

# Introduction

What follows is an attempt to describe the movement from an abstract data model and a semantically meaningful ontology to a serialization of that information that a generic web application can consume and display.

I will first provide a general overview of the abstract data model (visually represented here: [https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png](https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png)) and how this model can be translated into a set of classes and subclasses that take on a logical and predictable set of properties suited to their class type (described here[https://github.com/scta/scta-ontology/blob/master/SCTAOntologySpec.md](https://github.com/scta/scta-ontology/blob/master/SCTAOntologySpec.md))

Second, I will turn to a mock serialization of this same information that will illustrate how a web application could efficiently consume and display this information while minimizing HTTP requests.

In the end, I’ll demonstrate this entire movement from data model to serialization to web application consumption for a number of common resource types.

# 1.  Data Model and Semantic Properties

## A.  WorkGroups and Works

The model begins from the concept of a top level **WorkGroup**. A top level **WorkGroup** can contain nested **WorkGroups** as well as a FRBR **Work**. I understand a FRBR **Work** to be an instance of the lowest level **WorkGroup**. This means that it has all the characteristics and properties of any other **WorkGroup** except that it is the lowest level and therefore cannot contain any other **WorkGroups** or **Works**. It can only contain FRBR **Expressions**.

### Digression on FRBR CTS realignment

Right away, it should be noted that this is a departure from the way CTS (Canonical Text Services) has understood the term **Work** (see: [http://www.homermultitext.org/hmt-docs/specifications/ctsurn/specification.html](http://www.homermultitext.org/hmt-docs/specifications/ctsurn/specification.html). While CTS has claimed an equivalence between a FRBR **Work** and a CTS **Work**, I have opted for a different approach.

CTS states:

>Within a text group, a CTS URN’s work is a conceptual entity, like the FRBR work: it is an abstract idea of the content expressed in all versions of a work, in the original language or in translation. [http://www.homermultitext.org/hmt-docs/specifications/ctsurn/specification.html](http://www.homermultitext.org/hmt-docs/specifications/ctsurn/specification.html_)

CTS moves directly from CTS **Work** to CTS **Version** which it identifies with a FRBR **Expression**, and from CTS **Versions** to CTS **Exemplars** which it identifies with FRBR **Items**. Missing from this, as CTS notes, is the concept of FRBR **Manifestation**.

Thus, we have the following alignment:

FRBR Work | CTS Work
FRBR Expression | CTS Version
FRBR Manifestation |
FRBR Item | CTS Exemplar

This close, but not exact, alignment of the two models seems to be the source of great confusion, and I think we need to create a remapping and then revert to the FRBR language.

In brief, I think the deep abstractness of the FRBR **Work** is under appreciated. Likewise, our familiarity with the colloquial use of the word “work” to refer to an artistic creation that appears in a certain form (i.e. a book), inclines us to identify FRBR **Work** with what CTS means by **Work**. But in actual fact what CTS usually means by **Work** more closely parallels what FRBR means by **Expression**.

Below are the brief descriptions that FRBR gives for a FRBR **Work** and FRBR **Expression**:

>Work is a "distinct intellectual or artistic creation." For example, Beethoven's Ninth Symphony apart from all ways of expressing it is a work. When we say, "Beethoven's Ninth is magnificent!" we generally are referring to the work.
>Expression is "the specific intellectual or artistic form that a work takes each time it is 'realized.'"[1] An expression of Beethoven's Ninth might be each draft of the musical score he writes down (not the paper itself, but the music thereby expressed). [https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records](https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records)

Critical in the definition of a FRBR **Work** is the phrase: considered “apart from all ways of expressing it.” Here we are very far from any notion of a text (a FRBR **Expression**) much less the idea of a typeset book (a FRBR **Manifestation**) and even further from the notion of a particular instance of a FRBR **Manifestation** in a library or bookshop somewhere in the world (a FRBR **Item**).

The idea of *Moby Dick* can be expressed in multiple ways. It can be expressed as a novel or as a screen-play. Each of these are separate FRBR **Expressions** that, as of yet, have made no reference to a particular edition or version. They are still just ideas. Each of these **Expressions** can then manifest themselves in different ways.

Thus from the outset I think we need a realignment of the two models that contradicts that alignment proposed by CTS.

Instead of:

FRBR Work | CTS Work
FRBR Expression | CTS Version
FRBR Manifestation |
FRBR Item | CTS Exemplar

we should adopt the following alignment:

FRBR Work |
FRBR Expression | CTS Work
FRBR Manifestation | CTS Version
FRBR Item | CTS Exemplar

I pause here to provide one last real world justification for this correction:

Adam Wodeham's Oxford Ordinatio Commentary on the Sentences of Peter Lombard is a FRBR **Work** as I understand it.

But this **Work** was expressed by Wodeham in the 1330's as his own written expression. For moment let us call this Adam Wodeham’s "Original Expression."

But this same **Work** was expressed as an “Abbrevation” by Henry Totting of Oyta some 60 years later. Let’s call this the “Abbreviated Expression.” Henry Totting of Oyta took the same abstract **Work** and created a shorter abbreviated **Expression**, in a manner similar to the way a screen play might shorten or cut out sections left in a longer novel **Expression**. The screen play, like the “Abbreviated Expression” is a not a new CTS **Version** or FRBR **Manifestation** of the **Work**. It is a new **Expression** of the same idea that the “Original Expression” expresses.

In short, despite differences, the “Original Expression” and “Abbreviated Expression” are linked because they are two different **Expressions** of the same FRBR **Work**. Adam Wodeham is the author in both cases and they contain the same abstract content. But the content is expressed differently. The "Original Expression" was expressed by Wodeham himself while the "Abbreviated Expression" was expressed by Henry Totting of Oyta.

We cannot simply call these CTS **Versions** or FRBR **Manifestations** because each of these FRBR **Expressions** will have their own CTS **Versions** / FRBR **Manifestations**. For example, in 1516 John Mair produced the 1516 printed edition (FRBR **Manifestation**) of the "Abbreviated Expression”. This 1516 FRBR **Manifestation** was printed several times such that there are now several FRBR **Items** or **CTS Exemplars** of this particular **Manifestation** in different libraries throughout the world.

## B.  Expressions and OHCO

Once at the FRBR **Expression**, we have reached what we most commonly think of as the abstract text without yet specifying a particular material instantiation, version, or edition of that text. A good indicator that one has reached the FRBR **Expression** level is that the “text” can be broken down into a hierarchy. No such hierarchy is possible when discussing a FRBR **Work** because the idea has not been expressed in any form. A hierarchy only forms, when an author tries to express that idea. Accordingly, the hierarchies will likely differ in two different **Expressions** of the same **Work**.

Once at the **Expression** level, the existing text hierarchy makes it possible to construct a matrix, where FRBR concepts continue to run along the X axis and the hierarchy division runs down the
Y axis. Thus, each unit within the FRBR **Expression** hierarchy can have FRBR **Manifestations** and FRBR **Items**.

While the hierarchy of a text is often unique to the **Expression** or to **Expressions** within a similar **WorkGroup**, it is possible to abstract from the details of the hierarchy and identify common patterns within any given hierarchy. Two obvious examples of this are the top level of the **Expression** hierarchy and the bottom level of the hierarchy. Every hierarchy, no matter how big or small, simple or complicated, will have a top level **Expression** and a bottom level **Expression**. Moreover, we can expect that these kinds of **Expressions** will have features or properties unique to their type. For example, a top level **Expression** will, by definition, never have a *isPartOfTopLevelExpression* property because there are no **Expressions** containing it. Likewise, a bottom level **Expression** will never have a *hasPart* property because it is the lowest level of the hierarchy and therefore there are no more parts to be contained.

### Expression Structure Types and Expression Levels

The desire to identify general classes of resources within an **Expression** hierarchy while remaining agnostic about the actual hierarchy of any given **Expression** is the impetus behind the associated properties I refer to as *structureTypes* and *levels*.

The *structureType* property is used to divide a hierarchy, no matter its actual structure, into three privileged parts. A top level Expression (as we will see below, normally a top level *structureCollection*), a *structureItem* level, and *structureBlock* level.

Let’s consider first the *structureItem* division. This division, perhaps despite appearances, actually follows an established and traditional practice of dividing an **Expression** into a privileged set of units. In most books, this is the chapter division level. Consider the formatting of most monographs. Though there may be sections within books that contain chapters, and though chapters may contain many subdivisions, the chapter division is privileged. The chapter division gets a new page and a grand heading in a way that subdivisions do not. Likewise, if paragraph numbers, line numbers, or note numbers, get counted the numbering usually restarts at these privileged points in the **Expression** hierarchy. This seems to be clear evidence that this division within the hierarchy is being privileged. This privileging is not without good reason. It allows us, no matter how complicated the hierarchy of a text, to quickly jump from the top level **Expression** to exhaustively access all of the discrete sections within a text without having to loop through an unknown number of nested divisions.

The *structureBlock* performs a similar function. The *structureBlock* designation refers to the lowest exhaustive unit of text within the hierarchy. It is not possibly to identify the lowest unit in the **Expression** hierarchy simple by its level alone. **Expression** hierarchies may vary drastically in the number of levels within the hierarchy. So in order to easily identify the lowest exhaustive unit of a text (normally paragraphs or lines), we can designate each of these units as *structureType=structureBlock*.

Thus in two steps, no matter how complicated the hierarchy or how large the text, we can request every paragraph or every line in a text. We simply ask the top level **Expression** for every *structureItem* and every *structureItem* for every *structureBlock*.

Besides *structureItem* and *structureBlock*, we also use the notion of a *structureCollection* and *structureDivision* to classify other sections of the **Expression** hierarchy that are not otherwise designated.

A *structureCollection* is any section that stands above the *structureItem* level. These types help create predictable properties. Any **Expression** designated as a *structureCollection* would be expected to list all the *structureItems* it contains.

In this case, a top level **Expression** would also be a *structureCollection*. It would be differentiated from any other sub sections that are also *structureCollections* because it alone has a level property whose value equals “1”.

Any *structureCollection* whose level property does not equal 1 would be expect to also have a property *isPartOfTopLevelExpression*.

A *structureDivision* is similar. It represents a section in the hierarchy that is contained by a *structureItem* section, but is not a *structureBlock* section. Any *structureDivision* **Expression** should be expected to have the properties *isPartOfStructureItem* and *hasStructureBlock*.

## C.  Manifestations

FRBR **Manifestations** should now exist at every level of the **Expression** hierarchy. They can be associated through predictable properties. Each **Expression** can take a *hasManifestation* property and each **Manifestation** can take an *isManifestationOf* property.

**Manifestations** now bring us closer to the familiar CTS **Version**, but these versions vary in type. A **Manifestation** could be a manuscript, an early modern printing, a modern critical edition, or even a born digital critical edition.

It’s important to remember that even though a **Manifestation** is beginning to point to a physical or material representation of an **Expression**, it is nevertheless still an idea and not a physical object. We are referring here to the idea of the physical representation of an **Expression**. Thus when we talk about the 1512 printing of a given **Expression**, we are not talking about the **Item** of the 1512 printing in the British Library or in the Harvard University Library.

This is easier to see in the case of printed books, but harder to see in the case of a manuscript, which by definition will have only one material instantiation (or FRBR **Item**). Nevertheless, the conceptual distinction is important. The **Manifestation** that has the *manifestationType* manuscript will have one and only one material instantiation, whereas the **Manifestation** that has the *manifestationType* of a printed book will have several, if not thousands, of material instantiations.

Finally, we must also include a space here for born digital **Manifestations** of an **Expression**. The new practice of building born-digital critical editions of **Expressions** is a good example. This means that we have a **Manifestation** that corresponds to no physical material object. And it is of course tempting here associate this **Manifestation** with the actual digital file. But we must resist this temptation and continue to remember that the **Manifestation** is still an idea of how to materially represent (in this case, encode) a given **Expression**. It is the idea of a particular edition that may either have a material object or digital transcriptions standing as an instantiations of that idea.

In concrete, a **Manifestation** should inherit the *structureType* of the **Expression** it *isManifestationOf*. Moreover, a **Manifestation** should take on properties specific to a **Manifestation**. A **Manifestation** should have a *manifestationType* that indicates whether it is a manuscript, early printing, modern critical edition, or born digital critical edition. Other properties and constraints specific to each type of **Manifestation** could then be added.

Finally, a **Manifestation** should also point to FRBR **Items**. For reasons to be explained below we divide these associations into two types, *hasMaterialObject* and *hasTranscription*.

## D.  Items: MaterialObjects and Transcriptions

There seems to be something conceptually correct about identifying a digital transcription (by which I mean a semantically encoded text that can be serialized and distributed in multiple ways, and thus we do not yet mean the raw TEI file, or another other format) with a FRBR **Item**. Just like an individual printed books, it aims to be an instantiation of a **Manifestation**. However, instead of instantiating that idea with ink on a page, it does so with electronic signals on a disk drive.

Nevertheless, the digital transcription is also so different from the material instantiation that we felt it best to split the FRBR **Item** class into two subclasses: the **MaterialObject** and the **Transcription**.

The **MaterialObject** should be a record that has the appropriate properties to locate and describe the material book in this or that particular library.

My focus here will be on the **Transcription** subclass.

As mentioned above, the **Transcription** resource is not an actual digital file. Rather it is a resource that contains properties that can direct a client to the raw text representing this transcription in various file formats, the most obvious being XML. The *hasXML* property should point directly to the raw TEI file, which when requested through a traditional HTTP request returns exactly that: a TEI file.

Keep in mind that the the **Transcription** resource continues to inherit its hierarchical position from the **Expression** to which it is connected. It will rarely be the case then that separate source TEI XML files are produced for every **Expression** level. Rather, a **Document** or file will exist corresponding to some level of the **Expression** hierarchy. I find that it generally makes the most sense to divide my **Documents** at the *structureItem level*. This mean that the raw XML for a **Transcription** corresponding to *structureCollection* level will actually be composed from several documents. I expect that the *hasXML* property would point to a XML TEI document that is composed dynamically from the **Documents** required for its composition. Thus the *hasDocument* property should point to the XML **Documents** from which this **Transcription's** raw XML TEI document was dynamically composed.

The same situation occurs for a *structureDivision* and *structureBlock*. The *hasXML* property should point to a raw XML file that is dynamically constructed from selecting a part of the **Document** in which the raw source XML is contained. In this case, there should only be one *hasDocument* property and it should point to the XML **Document** from which the raw XML for this **Transcription** was pulled and dynamically reconstructed.

The **Transcription** resource could also point to a number of other encoding serializations such as HTML or JSON or PlainText with parallel properties like *hasHTML*, *hasJSON*, or *hasPlainText*.

# 2.  Serialization for a API consuming client

In this section, I’m going to propose some basic *mock* jsonld serializations of different resources. The expected properties and values returned in the serialization will reflect the data model described above and the nature of the resource in question. In connection with each serialization, I’ll provide a screen shot of a generic web application that could make use of this information.

Let’s start with a top level **WorkGroup**. A simple request for a top level **WorkGroup** would return the following jsonld data.

    {
      "@id": "http://scta.info/resource/scta",
      "@type": "workGroup",
      "title": "Sentences Commentary Text Archive",
      "description": "The top level work group",
      "level": "1",
      "parts": [
        {
            "@id": "http://scta.info/resource/sententia",
            "@type": "workGroup",
            "description": "A Work Group for all commentaries on the Sentences of Peter Lombard",
            "title": "Sentences Work Group"
        },
        {
            "@id": "http://scta.info/resource/deanima",
            "@type": "workGroup",
            "description": "A Work Group for all commentaries on Aristotle's De Anima",
            "title": "De anima commentaries work group"
        }
      ],
      "expressions": [
        {
            "@id": "http://scta.info/resource/plaoulcommentary",
            "@type": "expression",
            "description": "Commentary on the Sentences by Peter Plaoul",
            "title": "Plaoul Commentary",
            "author": "Peter Plaoul"
        },
        {
            "@id": "http://scta.info/resource/wodehamordinatio",
            "@type": "expression",
            "description": "Commentary on the Sentences by Adam Wodeham",
            "title": "Wodeham Ordinatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resource/wodehamabbreviatio",
            "@type": "expression",
            "description": "Commentary on the Sentences by Adam Wodeham",
            "title": "Wodoeham Abbreviatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resource/rothwellcommentary",
            "@type": "expression",
            "description": "Commentary on the Sentences by William Rothwell",
            "title": "Rothwell Commentary",
            "author": "William de Rothwell"
        },
        {
            "@id": "http://scta.info/resource/meleandercommentary",
            "@type": "expression",
            "title": "Meleander de anima commentary",
            "author": "Placidus Aegidius Meleander"
        }
      ]
    }

This can be displayed as follows:

![top level work group]({{ site.assets_url }}top-level-workGroup.png)

In the next serialization, we show a sample from the next (or second) level **WorkGroup**

    {
      "@id": "http://scta.info/resources/sententia",
      "@type": "workGroup",
      "title": "Sententia",
      "description": "A work group of Sentences Commentaries",
      "level": "2",
      "isPartOf": "http://scta.info/resources/scta",
      "parts": [
        {
            "@id": "http://scta.info/resources/plaoulcommentary",
            "@type": "expression",
            "title": "Plaoul Commentary",
            "author": "Peter Plaoul"
        },
        {
            "@id": "http://scta.info/resources/wodehamordinatio",
            "@type": "expression",
            "title": "Wodeham Ordinatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resources/wodehamabbreviatio",
            "@type": "expression",
            "title": "Wodoeham Abbreviatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resources/rothwellcommentary",
            "@type": "expression",
            "title": "Rothwell Commentary",
            "author": "William de Rothwell"
        }
        ],
      "expressions": [
        {
            "@id": "http://scta.info/resources/plaoulcommentary",
            "@type": "expression",
            "title": "Plaoul Commentary",
            "author": "Peter Plaoul"
        },
        {
            "@id": "http://scta.info/resourcees/wodehamordinatio",
            "@type": "expression",
            "title": "Wodeham Ordinatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resources/wodehamabbreviatio",
            "@type": "expression",
            "title": "Wodoeham Abbreviatio",
            "author": "Adam Wodeham"
        },
        {
            "@id": "http://scta.info/resources/rothwellcommentary",
            "@type": "expression",
            "title": "Rothwell Commentary",
            "author": "William de Rothwell"
        }
      ]
    }

The following image, shows a rendering of the above **WorkGroup**, where the client has chosen to show all the **Expressions** contained by a **WorkGroup**.

![top level work group]({{ site.assets_url }}workGroup-with-expressions.png)

The next serialization shows the jsonld response for a top level **Expression**:

    {
      "@id": "http://scta.info/resource/plaoulcommentary",
      "@type": "expression",
      "title": "Plaoulcommentary",
      "author": "Peter Plaoul",
      "description": "Commentary on the Sentences by Peter Plaoul",
      "structureType": "collection",
      "level": "1",
      "isPartOf": "http://scta.info/resource/sententia",
      "canonicalManifestation":
        {
            "@id": "http://scta.info/resource/plaoulcommentary/critical",
            "title": "Critical Edition for Plaoul Commentary",
            "type": "critical",
            "status": "Draft",
            "editor": "Jeffrey C. Witt",
            "canonicalTranscription":
            {
                "@id": "http://scta.info/resource/plaoulcommentary/critical/transcription",
                "title": "Critical Edition Transcription for Plaoul Commentary",
                "type": "critical",
                "status": "Draft",
                "editor": "Jeffrey C. Witt",
                "xml": "http://scta.info/text/plaoulcommentary.xml"
            }
        },
        "manifestations": [
        {
            "@id": "http://scta.info/resource/plaoulcommentary/reims",
            "title": "Reims Manuscript for Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/plaoulcommentary/vat",
            "title": "Vatican Manuscript for Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/plaoulcommentary/svict",
            "title": "St. Victor Manuscript for Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/plaoulcommentary/sorb",
            "title": "Sorbonne Manuscript for Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/plaoulcommentary/critical",
            "title": "Critical Edition for Plaoul Commentary",
            "type": "critical"
        }
      ],
      "parts": [
        {
            "@id": "http://scta.info/resource/deFide",
            "title": "De Fide"
        },
        {
            "@id": "http://scta.info/resource/deNotitia",
            "title": "De Notitia"
        },
        {
            "@id": "http://scta.info/resource/deFruitione",
            "title": "De Fruitione"
        },
        {
            "@id": "http://scta.info/resource/deTrinitate",
            "title": "De Trinitate"
        },
        {
            "@id": "http://scta.info/resource/deCaritate",
            "title": "De Caritate"
        },
        {
            "@id": "http://scta.info/resource/deCaritate",
            "title": "De Caritate"
        },
        {
            "@id": "http://scta.info/resource/deLibertate",
            "title": "De Libertate"
        },
        {
            "@id": "http://scta.info/resource/deIncarnatione",
            "title": "De Incarnatione"
        }
      ],
      "items": [
        {
            "@id": "http://scta.info/resource/lectio1",
            "title": "Lectio 1",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio1"
        },
        {
            "@id": "http://scta.info/resource/lectio2",
            "title": "Lectio 2",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio2"
        },
        {
            "@id": "http://scta.info/resource/lectio3",
            "title": "Lectio 3",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio3"
        },
        {
            "@id": "http://scta.info/resource/lectio4",
            "title": "Lectio 4",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio4"
        },
        {
            "@id": "http://scta.info/resource/lectio5",
            "title": "Lectio 5",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio5"
        },
        {
            "@id": "http://scta.info/resource/lectio6",
            "title": "Lectio 6",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio6"
        },
        {
            "@id": "http://scta.info/resource/lectio7",
            "title": "Lectio 7",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio7"
        },
        {
            "@id": "http://scta.info/resource/lectio8",
            "title": "Lectio 8",
            "status": "Draft",
            "gitRepo": "http://bitbucket.org/jeffreycwitt/lectio8"
        }
      ]
    }

Here’s how a client might consume that information to provide information about nested parts:

![top level work group]({{ site.assets_url }}expression-with-items.png)

Finally, we can illustrate what the jsonld might look like for a non top-level **Expression**, such as an **Expression** with a *structureType=structureItem*

    {
      "@id": "http://scta.info/resource/lectio1",
      "@type": "expression",
      "title": "Lectio 1",
      "author": "Peter Plaoul",
      "description": "Lectio 1 from Plaoul's Commentary",
      "structureType": "item",
      "level": "3",
      "isPartOf": "http://scta.info/resource/deFide",
      "topLevelExpression": "http://scta.info/resource/plaoulcommentary",
      "next": "http://scta.info/resource/lectio2",
      "canonicalManifestation":
        {
            "@id": "http://scta.info/resource/lectio1/critical",
            "title": "Critical edition for lectio 1 in Plaoul Commentary",
            "type": "critical",
            "status": "Draft",
            "editor": "Jeffrey C. Witt",
            "canonicalTranscription":
            {
                "@id": "http://scta.info/resource/lectio1/critical/transcription",
                "title": "Critical Edition Transcription for lectio 1 in Plaoul Commentary",
                "status": "Draft",
                "editor": "Jeffrey C. Witt",
                "xml": "http://bitbucket.org/jeffreycwitt/raw/master/lectio1.xml"
            }
        },
      "manifestations": [
        {
            "@id": "http://scta.info/resource/lectio1/reims",
            "title": "Reims Manuscript for lectio 1 in Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/lectio1/vat",
            "title": "Vatican Manuscript for lectio 1 in Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/lectio1/svict",
            "title": "St. Victor Manuscript for lectio 1 in Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/lectio1/sorb",
            "title": "Sorbonne Manuscript ffor lectio 1 in Plaoul Commentary",
            "type": "manuscript"
        },
        {
            "@id": "http://scta.info/resource/lectio1/critical",
            "title": "Critical Edition for lectio 1 in Plaoul Commentary",
            "type": "critical"
        }
      ],
      "parts": [],
      "blocks": [
        {
            "@id": "http://scta.info/resource/p1",
            "title": "paragraph 1"
        },
        {
            "@id": "http://scta.info/resource/p2",
            "title": "paragraph 2"
        },
        {
            "@id": "http://scta.info/resource/p3",
            "title": "Paragraph 3"
        },
        {
            "@id": "http://scta.info/resource/p4",
            "title": "Paragraph 4"
        }
      ]
    }

And this information can be used as follows:

![item text view]({{ site.assets_url }}item-text-view.png)

But this same information can be used for a different view, such as a view of available **Manifestations**:

![available manifestations]({{ site.assets_url }}available-manifestations-at-item-level.png)

Likewise, the client should be able to treat every **Expression**, at any level in the hierarchy, the same way while adjusting for properties unique to that *structureType*. So if the resource id points to a *structureBlock* (or paragraph) instead of a *structureItem*, we get a display that automatically adjusts.

![block level display]({{ site.assets_url }}block-expression-display.png)

# 3. Appendices

## Appendix A: Data Model Visualization

![https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png](https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png)

[https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png](https://raw.githubusercontent.com/scta/scta-ontology/master/SCTASCHEMA3.png)

## Appendix B: Resource Types and Properties List

[https://github.com/scta/scta-ontology/blob/master/SCTAOntologySpec.md](https://github.com/scta/scta-ontology/blob/master/SCTAOntologySpec.md)

## Appendix C: Links

* Live client listing workGroups: [http://scta.lombardpress.org/text/questions/?resourceid=http://scta.info/resource/scta](http://scta.lombardpress.org/text/questions/?resourceid=http://scta.info/resource/scta)
* Live DB visualization for the same resource [http://scta.info/resource/scta](http://scta.info/resource/scta)

* Live client listing available top Level expressions [http://scta.lombardpress.org/text/questions/?resourceid=http://scta.info/resource/plaoulcommentary](http://scta.lombardpress.org/text/questions/?resourceid=http://scta.info/resource/plaoulcommentary)
* Live DB visualization for the same resource [http://scta.info/resource/plaoulcommentary](http://scta.info/resource/plaoulcommentary)
