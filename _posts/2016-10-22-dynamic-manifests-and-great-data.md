---
layout: post
title:  Creating Dynamic Custom IIIF Manifests and the Importance of Great Data
date:   2016-10-22
comments: true
tags: featured
description: How we create dynamic IIIF collections and manifests for distributed content that correspond to author and texts within the SCTA catalogue.
---

# Introduction

There is a lot of interest of late within the IIIF community to create GUI tools allowing scholars to explore material and create custom manifests or custom tables of contents.

This is all well and good. It is important, and it has a place. But I want to make sure we are not overlooking the power inherent in the production of strong data models and the publication of open access data.

In this post I describe a couple of examples of how strong data models and open can data allow us to construct **dynamic** IIIF manifests and collections (curated from libraries throughout the world) with a speed and scale that individual GUI manifest constructors cannot compete with.

# Example 1: Text collections

Over the last month, most of my work has involved implementing the Manifestation Surface data model I described in an [earlier post](/2016/08/09/surfaces-canvases-and-zones/). A central motivation behind this model and my implementation work is that the focus of the SCTA and LombardPress is slightly different than most of the main players in the IIIF community right now. Many IIIF implementers are primarily focused on building IIIF collections of codices that mirror their physical collections.

The SCTA however is an archive that has no physical collections. Rather we collect ideas. Or more specifically Expression of texts and their Manifestations. (See my [earlier post](/2016/06/12/DTS-modeling-proposal/) for a description of the modified FRBR model we use at the SCTA.) These Expressions have their own hierarchy that do not correspond directly to the material hierarchy of a codex.

For example, an Expression may have Manifestations in many codices scattered throughout the world. Further, these manifestations often constitute only a part of a codex. Further many Expression Manifestations span several material codices.

A IIIF Manifest that focuses simply on the presentation of a full codex is great for many purposes, particularly for codicological studies. But when a scholar is focused on an Expression of a text and wants to see the Manifestations of that text, simply providing the scholar with a list of codexes in which this Expression or part of this Expression is found leaves a lot of work left to be done. Further, at least in the world in medieval philosophy and theology texts, it is extremely common for a scholar to be an expert on a particular section of a text. For example a scholar may be doing research only on Book I of William Rothwell's commentary on Lombard's *Sentences*. In this case, if a scholar asks for a lists of Manifestations of said commentary and receives a list of any codex containing this commentary, they will end up with a lot of noise. Specifically, they will receive a list of codices that may only contain books 3 or 4 of the commentary. It will take the scholar further work to filter out which codex is relevant and which codex is not relevant. Likewise, the reverse can happen. A scholar may be presented with codices that contains two or three other texts beside the text in question. They must then navigate into the codex and often spend a long time trying to find where the relevant text begins. In both cases, a further strain is placed on the scholar. This strain can be alleviated when we offer them dynamic collections of dynamic manifests that only display the texts or parts of text in which they are interested.

The following screen shots show what our dynamic collections and manifests can offer the scholar.  

In the first screen shot, you can see that we can produce a manifest of the codex 686 in the University of Pennsylvania collection (complements of [OPENN](http://openn.library.upenn.edu/)).

![Penn-Rothwell-Manifest](/assets/images/2016-10-22-dynamic-manifests/Penn-Rothwell-Manifest.png)

As you can see, this codex contains approximately 232 pages. But as a researcher working on the text of William of Rothwell, my interest is not in this codex directly, but rather all the Manifestations to Rothwell's texts. Thus I need first the capability to build dynamic collections that can show all Manifestations of this Text/Expression. Second, I also need the capability to build dynamic manifests that can provide the user with only those pages that include the relevant part of Rothwell's text.

As one can see in the image below, the Penn text contains considerably fewer pages that correspond to the Rothwell text than are found in the codex as a whole. The rest of the pages correspond to an entirely different text. Nor do I want to be confined to Penn manuscripts only, since this same Expression also has Manifestations in the e-codices collection and Royal Danish Library.

![Rothwell-Text](/assets/images/2016-10-22-dynamic-manifests/RothwellText.png)

Further, it is quite likely that I'm not even interested in the entirety of Rothwell's commentary. Rather I may only be interested in Book 1 of his commentary. In the screen shot below, we give users the options to create a dynamic collection for only Book 1 of Rothwell's commentary. What should be noticed here is that this collection no longer includes a manifest from the Royal Danish Library. This is because this particular manuscript only contains book 4 of Rothwell's commentary. Thus, if we only gave the researcher a collection of entire codices that contain some part of Rothwell's text, he or she would be immediately misled to think that there are three manifestations of the text that they are interested in rather two. Through dynamic collections like this, we hope to help scholars avoid the tedious labor of finding the material of actual interest and, in turn, help them find exactly what they need and then get to work.

![Rothwell-Book1](/assets/images/2016-10-22-dynamic-manifests/Rothwell-Book1.png)

# Example 2: Custom Query Manifests

The second example is more experimental but also exciting. Using the SCTA metadata about our texts and their connections to Surfaces and Canvases, we can allow researchers (or the technical staff supporting a particular research group with particular research needs) to create dynamic manifests from custom SPARQL queries.

The admittedly lengthy SPARQL query shown below is one such example.

```
SELECT ?top_level ?top_level_title ?surface ?surface_title ?isurface ?canvas ?canvas_label ?canvas_width ?canvas_height ?image_height ?image_width ?image_type ?image_format ?image_service ?image_service_profile ?anno ?resource
  {
    ?element <http://scta.info/property/structureType> <http://scta.info/resource/structureElement> .
  	?element <http://scta.info/property/isInstanceOf> <http://scta.info/resource/hebr11_1> .
  	?element <http://scta.info/property/isPartOfStructureBlock> ?paragraph .
    ?paragraph <http://scta.info/property/isPartOfTopLevelExpression> ?top_level .
    ?top_level <http://purl.org/dc/elements/1.1/title> ?top_level_title .
  	?paragraph <http://scta.info/property/hasManifestation> ?manifestation .
    ?manifestation <http://scta.info/property/hasSurface> ?surface .
    ?surface <http://purl.org/dc/elements/1.1/title> ?surface_title .
    ?surface <http://scta.info/property/hasISurface> ?isurface .
    ?surface <http://scta.info/property/order> ?order .
    ?isurface <http://scta.info/property/hasCanvas> ?canvas .
    ?canvas <http://www.w3.org/2000/01/rdf-schema#label> ?canvas_label .
    ?canvas <http://www.w3.org/2003/12/exif/ns#width> ?canvas_width .
    ?canvas <http://www.w3.org/2003/12/exif/ns#height> ?canvas_height .
    ?canvas <http://iiif.io/api/presentation/2#hasImageAnnotations> ?bn .
    ?bn <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> ?anno .
    ?anno <http://www.w3.org/ns/oa#hasBody> ?resource .
    ?resource <http://www.w3.org/2003/12/exif/ns#height> ?image_height .
    ?resource <http://www.w3.org/2003/12/exif/ns#width> ?image_width .
    ?resource <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ?image_type .
    ?resource <http://purl.org/dc/elements/1.1/format> ?image_format .
    ?resource <http://rdfs.org/sioc/services#has_service> ?image_service .
    ?resource <http://rdfs.org/sioc/services#has_service> ?image_service .
    OPTIONAL{
      ?image_service <http://usefulinc.com/ns/doap#implements> ?image_service_profile .
    }
    OPTIONAL{
      ?image_service <http://purl.org/dc/terms/conformsTo> ?image_service_profile .
    }
  }
  ORDER BY ?top_level

```

The screen shot below shows a number of examples using the above query to build dynamic manifests that include content from multiple providers in the same manifest.

![custom-manifests](/assets/images/2016-10-22-dynamic-manifests/custom-manifests.png)

While the SPARQL query is complicated, it allows us to ask the computer a question and to construct a manifest in response, rather than having to use a GUI to manually create such a manifest. A query like the one shown above could be used for all kinds of amazing research and pedagogical purposes. For example, we could ask the data set to construct a manifest for every page that contains a marginal note and then order those results by date. Such a query could be used to study how citation and reference practices changed over time. Again, we could ask the data set to shows us a manifest of every instance of the name Augustine, and then sort those pages by date, regions, and scribal hand, so that we could see how spellings and abbreviations of Augustine changed over time.

With strong data models and open data, there seems to be no limit to the kind of questions we can ask and the kinds of manifests we can build.

Questions and comments welcome :)
