---
layout: post
title:  Surfaces, Canvases, and Zones
date:   2016-08-09
comments: true
tags: featured depreciated
---

# Introduction

In this post, I want to offer one proposal about how the SCTA should model the relationship between manuscript folios, their digital images, and the transcriptions of those folios, as well as how a publishing framework like LombardPress should encode and render these modeling decisions.

Let's begin with an initial objection. Hasn't IIIF already modeled these relationships? The answer is to some extent yes, and wherever possible we plan to following these modeling specifications. However, we also need to remember that the IIIF presentation API is about presenting "presentational data". It is not necessarily meant to be exhaustive of the kind of properties and relationships required to adequately describe the problem domain.

Accordingly, we need to describe more precisely where and how the IIIF datamodel connects, overlaps, or differs from the SCTA datamodel for describing a critical corpus.

# The Manifestation Surface

When modeling the folio, it is extremely tempting to identify directly the folio side (e.g. folio 5r) with the concept of a IIIF canvas.

This however is problematic.

The in general, we view the IIIF Canvas as a resource that represents the surface of a page of a particular book, somewhere out there in the world, of which someone can actually take a picture.

But in the SCTA model, following the FRBR model, we make an abstraction between the *idea* of the physical page (the Manifestation) and any particular actual physical page instantiating the idea of this page (the Item)

The Manifestation refers to a particular material representation of an Expression of a Work. Usually, this means something like the 1950 edition and printing of Herman Melville's Moby Dick. But it can also mean Manuscript X at a particular library in the world.

Manifestations, therefore really do refer to a material representation in a way that Expressions do not, but they are still ideas. They are the idea of that material form. The idea of a particular typesetting and a particular layout. Thus it is very possible to talk about page 1 and page 2 of Manifestation even though we are still not talking about a page 1 or page 2 that you can take a picture of and digitally represent in a digital image.

In the SCTA model, we are proposing to call this idea a **Surface** which is an alias from a **Manifestation Surface**.

# The Item Surface (or ISurface)

The **Manifestation Surface** stands in contrast to the **Item Surface** or **ISurface**, which we see as closely parallel and tightly coupled with, but not identical to a **IIIF Canvas**.

An **Item Surface** is a surface you can take a picture of. It is the instantiation of a **Manifestation Surface** in a book found in a physical place. For examples, it is Loyola University Maryland Library's copy of the 1950 edition of Herman Melville's Moby Dick, in which can be found ISurface 1, 2, 3 and so on, instantiating the idea of Surface 1, 2, 3, and so on.

When dealing with manuscripts it is extremely tempting to collapse these two notions of a surface because by definition a Manifestation of the type "manuscript" can only have one Item. It cannot be reprinted, and thus it can only be found in one library. Nevertheless, we want our model to work for both manuscripts, incunabula, early modern printings, and modern books. Thus we need to keep this separation clear.

# Separating ISurface from IIIF Canvas

As mentioned above, the ISurface and IIIF Canvas should be seen as closely connected resources, to such a degree that there should generally be a one to one correspondence between the ISurface and the corresponding Canvas.

Given this parallel, why make the separation?

There a couple of good reasons to insist on creating two resources here.

First, the use of a common universal CanvasId is critical to global Linked Data. However, this global CanvasId and its direct properties are controlled by the institution that originally mints the Id. As such we do not directly control the resource and its properties. This is controlled by the institution that controls the domain. And as explained directly below, this lack of control causes some problems when different institutions take opposing approaches to the notion of a canvas.

 IIIF Manifest producers and therefore Canvas minters frequently create a single canvas for a two-up view (e.g. that is an image of 3v and 4r) that complicates the general parallel between these two resources. In general, we see this as bad practice. A canvas should be minted for each **ISurface** and images (whether two-up or not) should be offset (with left and top properties) to fit the dimensions of the abstract canvas. Nevertheless, we cannot control this practice and must deal with the practice adopted by minting institutions. Separating the **ISurface** from the Canvas allows us to point two different **ISurfaces** (e.g. 3v and 4r) to the same CanvasId (e.g. 3v-4r) when necessary.


# Objection and Reply: the case of marginal notes

But one might further object, why do we need to be so rigorous about the separation of a **Surface** and **ISurface**. Isn't it true that any image of page 3 from any Item of any Manifestation is sufficient to represent the **Manifestation Surface**? Aren't all page 3s in any Item supposed to be an identical representation of their Manifestation? In theory, and again if we we're only dealing with manuscripts, we could collapse this distinction. However, the history of the Book is also the history of marginal annotations. And every time an Item receives a handwritten marginal note, it becomes a unique Item. If we record and transcribe these marginal annotations, we need a mechanism to tie these transcriptions not simply to the **Manifestation Surface** on which they appear, but the **ISurface** on which they appear and the corresponding images of these particular **Item Surfaces**. The separation of **Surface** from an **ISurface** and Canvas provides us with this ability.

# Zones

The concept of a **Zone** parallels to the TEI concept of Zone and the IIIF concept of a region. The Zone is a resource that targets an area on a **Surface**.

In general, only a Transcription resource can take a **hasZone** property. A Transcription needs to be able to be able to take multiple **Zones** as it is quite common for a paragraph to cross from one **Surface** to the next.

A **Zone** is something that should be tethered to a **Manifestation Surface** via an **isOnSurface** property. The **Zone** should point to **Manifestation Surface** property rather than an **ISurface** property because the coordinates in question should really refer to the ideal coordinate regions of the Manifestation rather than any one instantiation of that surface. This is true even when the transcription for this **Zone** is a marginal note only appearing in a particular Item. While the marginal note appears only in the right column of this particular Item, the space itself nevertheless remains common to the Manifestation, and all Items of this Manifestation share this space. If a user wants to call up the particular image where this marginal note appears, they only need to request the correct **ISurface** from the available **ISurfaces** listed by the **Manifestation Surface**. The coordinates associated with each Zone can the be used to target an area on any related IIIF Canvas.

# Properties

With this description in mind, we should be able to describe a predictable and consistent set of properties that belong to each kind of surface and related resources.

## Manifestation Surface properties

A Surface can be expected to have the following set of properties

- rdf:type=surface
- dc:title
- dc:description

- hasISurface (multiple)
  - in theory a hasCanvas property could be listed for every instance of a given page in every extant book/item instantiating this manifestation.
- hasCanonicalISurface (single)
  - the hasCanonicalCanvas property should pick one out of a myriad of possible ISurfaces to be the canonical or default representation of this manifestation
- width
- height


## Item Surface (ISurface)

  An ISurface can be expected to have the following set of properties

  - rdf:type=ISurface
  - dc:title
  - dc:description

  - hasImage
  - hasCanonicalImage
  - hasCanvasId - points to the id of the canvas presentation resource
  - width (should inherit from **Surface**)
  - height (should inherit from **Surface**)
  - canvasHeight
  - canvasWidth
  - canvasTop (the offset against the Surface coordinates)
  - canvasLeft (the offset against the Surface coordinates)
    - Normally, these canvasHeight, canvasWidth properties should be identical with the ISurface width and ISurface height. Likewise, canvasTop and canvasLeft should normally be 0. These properties are required because of the contingency when a canvas has been identified with a set of facing pages rather than with an individual surface. The second set of coordinates is required to adjust all zone coordinates in such a cases. Zone coordinate should always be relative the **Surface** which should only ever represent a folio side or page. Again, we consider it bad practice when an institution mints such canvases, but we have no control over whether or not they do so.

  - hasAnnotationList (multiple)
  - hasTranscription (multiple)
  - hasCanonicalTranscription (single)

## Image

- rdf:type=image
- dc:title
- dc:description

Basic information required by IIIF should be listed here

```json

"resource": {
  "@id": "http://www.e-codices.unifr.ch/loris/kba/kba-WettF0015/kba-WettF0015_108r.jp2/full/full/0/default.jpg",
  "@type": "dctypes:Image",
  "format": "image/jpeg",
  "height": 6496,
  "width": 4872,
  "service": {
    "@context": "http://iiif.io/api/image/2/context.json",
    "@id": "http://www.e-codices.unifr.ch/loris/kba/kba-WettF0015/kba-WettF0015_108r.jp2",
    "profile": "http://library.stanford.edu/iiif/image-api/compliance.html#level1"
    }
  }
```

(Service should likely be its own resource as well)

## Zone

- isOnSurface (single)
- isZoneFor (multiple)
  - should be point to the transcription or transcriptions this is zone for. Rival transcriptions of the same entity should be pointing to identical zone resources rather than re-creating a new zone.
- lrx
  - coordinates should always be given as abstract units relative the **Manifestation Surface** coordinates
- lry
- ulx
- uly
- width
- height
- position
  - should refer to a position sequence or order (e.g. 1, 2, 3, 4 etc.)

# Visualization

Below is a simplified visualization of the kinds of structures outlined above.

![surface-visualization]({{ site.assets_url }}scta-ontology-surface-visualization.png)
