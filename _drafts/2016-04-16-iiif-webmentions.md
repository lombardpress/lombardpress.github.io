---
layout: post
title:  IIIF, Webmentions, and Collaboration between Institutions and Research Communities
date: 2016-04-16
---

# Introduction

In this post, we want to describe a new possibility for sharing information between institutions with rich collections of cultural matierals and research communities that often possess and great deal of knowledge and expertise about those objects. 

To date IIIF has focused primarily on how libraries and institutions can make images of their resources to users. But less attention has been paid to how institutions exposing their images can reap the benefits of what scholars know about their materials.

We imagine the following scenario. On the one hand, a holding library has lots of images of resources (e.g. images of books, manuscripts, maps, etc.). On the other hand, a group of scholars, an academic society, or some other institution maintains a dataset which includes detailed information about a given set of resources within the holding library’s collection, information that goes beyond the scope of the holding library; for example, a detailed table of contents, diplomatic or critical transcriptions, translations, and scholarly commentary.
 
Each party has important information to offer. Information that, if coordinated, could be used to enrich a user’s experience of an object when viewed in any IIIF compatible viewer such as Mirador or the Universal Viewer.

# Solution

Fortunately, the W3C Social Web working group is developing a specification to support this kind of collaboration. In light of that emerging specification, we propose a customization of that specification, tailored to the IIIF API, that will allow communities to share content in a decentralized way. 

What follows is a description is an explanation of the specification we have designed to faciliate this collaboration and example of its implementation betweent the Sentences Commentary Text Archive and e-codices.

# The Supplement Specification

To make this collaboration work, we are proposing an addition to the IIIF API called the IIIF “supplement” spec. 

*Please note: at the present this is not an officially adopted IIIF specification, but one that works with the existing IIIF API and could be adopted as an official specification. As such, the specification described below is likely to be subject to futher modification before any final community option.*

The supplement spec describes a basic wrapper that contains the supplemental content. This wrapper is needed to provide information about who is publishing the supplemental material and most importantly what kind of supplement it is.

Below we offer three examples of the kind of supplemental information a specialized scholarly community might: a range list (for example, a table of contents), a transcription search within service, and a layer of transcriptions for each canvas within a IIIF manifest.

A range list or table of contents:

        {  
            "@id": "http://scta.info/iiif/wdr-wettf15/supplement/ranges/toc",
            "@type": "sc:Supplement",
            "profile": "http://iiif.io/api/0/supplement/ranges",
            "within": [ "http://www.e-codices.unifr.ch/metadata/iiif/kba-WettF0015/manifest.json"],
            "viewingHint": "http://iiif.io/api/services/webmention/discard",
            "ranges": [
                {
                    "@id": "http://scta.info/iiif/wdr-wettf15/range/r1",
                    "@type": "sc:Range",
                    "label": "Commentary",
                    "viewingHint": "top",
                    "ranges": [
                        "http://scta.info/iiif/wdr-wettf15/range/r1-1",
                        "http://scta.info/iiif/wdr-wettf15/range/r1-2",
                        "http://scta.info/iiif/wdr-wettf15/range/r1-3",
                        ]
                }
            ]
        }

A search within service:

        {
            "@id": "http://scta.info/iiif/wdr-wettf15/supplement/service/searchwithin",
            "@type": "sc:Supplement",
            "profile": "http://iiif.io/api/0/supplement/service",
            "within": ["http://www.e-codices.unifr.ch/metadata/iiif/kba-WettF0015/manifest.json"],
            "viewingHint": "http://iiif.io/api/services/webmention/discard",
            "service": {
                "@context": "http://iiif.io/api/search/0/context.json",
                "@id": "http://exist.scta.info/exist/apps/scta/iiif/wdr-wettf15/search",
                "profile": "http://iiif.io/api/search/0/search",
                "label": "Search within this manifest"
                }
            }
        }

A transcription layer: 
 
        {
            "@id": "http://scta.info/iiif/wdr-wettf15/supplement/layer/transcription",
            "@type": "sc:Supplement",
            "profile": "http://iiif.io/api/0/supplement/layer",
            "within": [ "http://www.e-codices.unifr.ch/metadata/iiif/kba-WettF0015/manifest.json"],
            "viewingHint": "http://iiif.io/api/services/webmention/discard",
            "layer": "http://scta.info/iiif/wdr-wettf15/layer/transcription"
        }

At the same time institutions need to include in their own IIIF manifest a declaration of a listening service that can recieve and webmention notification.

        {
            "@context":"https://www.w3.org/TR/webmention/",
            "@id":"http://www.e-codices.unifr.ch/webmention/receive",
            "profile":"http://w3.org/TR/webmention",
            "label":"e-codices Webmention Service"
        }

We these standards in place, communication of information around common resrouces can be automated. 

We have developed a IIIF library that scholars can use to automatically alert holding institutions of available information. This library is avaiable here: [https://github.com/jeffreycwitt/iiif-webmetion.rb](https://github.com/jeffreycwitt/iiif-webmetion.rb)

Using this library anyone can, for example, send a webmention via the commandline simply by calling: 

        webmention <url/of/supplement/to/share>

The script will do all the rest of the work. It will crawl the supplement looking for the IIIF resources (usually "manifests"), found in the "within" property of the supplement. The script will then crawl the referenced manifest looking to see if their is a webmention listening service. If one is found, it will send a notification to this listening surface, following the W3C standards for webmentions.

Below is a short description of the standard protocols that should be followed for sending and receiving the a webmetion request.

## Sending the Webmention

The Webmention should be sent via POST and contain the two x-www-form-urlencoded parameters source and target where source would be the IIIF supplement (a rangelist, search within service, etc.) and the target would be the manifest to which supplement belongs. For more details see https://www.w3.org/TR/webmention/.

## Receiving the Webmention

The Webmention receiver should validate the source and the target and upon successful validation add the Webmention to a queue from which it can then be processed asynchronously to prevent DoS attacks. Typically, the receiver would validate the following and return an HTTP code 400 (Bad Request) if either of the following validations fail:

Are the required parameters source and target set?

* Is source a valid URI?
* Is target a valid URI?
* Does the target exist on the receiver’s side?
* Is the Webmention already in the queue?

If validation is successful, the receiver will return an HTTP code 202 (Accepted) indicating that the Webmention has been successfully received and will be processed. If any error occurs when adding the Webmention to the queue (e.g. when the database is unreachable) the receiver will return an HTTP code 500 (Internal Server Error).

# An Example

The above protocol has been succussfully implemented by the Sentences Commentary Text Archive (SCTA) and e-codices. At present, whenever the SCTA's database ingests new information about a manuscript that e-codices is making available via the IIIF API, the SCTA sends out a new webmention notification about supplemental information. 

![commandline-webmention.png]({{ site.baseurl }}/assets/images/2016-05-12-iiif-webmentions/commandline-webmention.png)
