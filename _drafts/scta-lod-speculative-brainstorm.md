---
layout: post
title:  Sharing Scholastic Data with Open Annotation
date:   2016-09-14
comments: true
---

## Sharing Scholastic Data with Open Annotation

### A very very very preliminary proposal

Let's start with a very simple goal.

Suppose we wanted all presentational clients to have access to aggregated information about Thomas Aquinas via the SCTA RDF database.

Let's suppose two groups (the RCS db and the de Anima db) know something about Thomas Aquinas in their individual databases. They can display this data in any way they want, but we also want them to publish their data in a RESTful way and to "announce" or "register" the publication in such away that it can be discovered and aggregated by the SCTA LOD database.

They could publish this information in jsonld format as follows:

RCS db

```jsonld
id: "http://rcs.uni.chs/feed/aquinas/annotation1"
type: annotation
body: {
  @type: "bio:birth"
  dc:date: "1225"
}
target: "http://viaf.org/viaf/264344179/"" //this is the viaf entry for Aquinas
```

De Anima DB

```jsonld
id: "http://deanima.io/feed/aquinas/annotation1"
type: annotation
body: {
  @type: "bio:birth"
  dc:date: "1224"
  bio:place: "Paris"

}
target: "http://scta.info/resource/Aquinas" //this is the scta resource id for Aquinas
```

Open Annotation has a concept of Annotation Collections and Annotations Pages, so each group or db could collect all their annotations about Aquinas together in an Annotation Page at a dereferencable url such as:

http://rcs.uni.chs/feed/aquinas/annotationPage1

or

http://deanima.io/feed/aquinas/annotationPage1

In addition to making these data feeds public, we need a way to discover them.

So all these Annotation Pages could be wrapped up in a single top level Annotation Collection, through which all individual annotations can be crawled and discovered. In this way, each db or research group only needs to register one url with the SCTA registry.

When these top level collections are shared in a SCTA registry, they will get crawled (and presumably cached) during through the SCTA build script.

Another discussion for another time might be about how to update the build when an Annotation Page updates, without having to rebuild the entire database. This could be done through ping backs or web mentions of some kind.

But for the moment, let's focus on how this distributed data might be automatically combined in such a way that it can be queried in a single http request.

First off, we might note that, in making an annotation, each db needs to be able to identify a target.

The RCS database has chosen to annotate the VIAF entry for Thomas Aquinas

The De Anima servers has chosen to annotate the SCTA resource.

And thus already it seems that there is no way to automatically reconcile these target differences and bring this information together.

However, if the SCTA resource maintains a list of privileged authority ids for names in its prosopography list (for VIAF, bnf, loc, dbpedia, etc), then we can allow distributed systems to annotate any of these targets, and the build script will know that they all refer to the same resource, namely http://scta.info/resource/Aquinas.

With these targets reconciled, the build script can begin harvesting information from these annotations.

But how does it know what information to harvest? With editorial control, the build script can identify ontology vocabularies that it wants to support. Thus, the SCTA build script could pull information from recognized and privileged semantic properties while ignoring others.

So, for example, with respect to harvesting birthdates, the SCTA build script could be programmed to recognize "bio:birth" but to ignore a rival ontology "biography:birthevent". Or it could be programmed to recognize both of the above ontologies, but to ignore the simple "birth" string without any namespace.

Within the constructed database itself, the SCTA must choose to privilege one ontology, perhaps "bio:birth," but maybe also a custom property called http://scta.info/property/birth. In the end, it doesn't does much matter as long as we publish which ontologies our build script understands. The publishing database can then choose any of these ontologies and be confident that it can be ingested by the SCTA build script. In this way querying clients will only be expected to understand one ontology, while information publishers can use a wider diversity of ontologies.

Since we are interested in biographical details that the general databases (VIAF, bnf, loc, etc) usually are not (e.g. Religious Order, education history, etc), we will likely need to create some custom ontologies.

From the examples above, the benefit of this aggregation is apparent. The RCS database only knows about the birth year, but the de anima database claims to know about the birth place.

But finally, the two databases offer conflicting information about the birth date.

Because we anticipate editorial control over the SCTA build script this can be handled in a couple of ways.

First, we program scripts to prioritize contributing sources in different ways. So, editors might decide to privilege the de anima database over the RCS database or vice versa, so that whenever there is a conflict the data from the privileged database would be chosen.

Alternatively, the build script could spit out a conflict log, that editors could then manually decide between conflicting pieces of information after the initial build.

Or finally the SCTA build script could be programmed to include both dates, along with each publishers argument for their date, and allow a client to make a final decision about which to use.

A general advantage of this approach is that data publish by each group is OPEN, meaning it is not SCTA specific. And thus it could be used by an independent project for other purposes. All we are asking here is that projects would publish data according to supported vocabularies and to register their top level collections with the SCTA registry.

If we were to expand this to manuscript description and annotations, the target of the annotations might best be the LOD url minted by the holding institution. And only if no such LOD url exists should the SCTA url id be used.

The discovery, harvesting, and reconciliation would then happen in the same way as described above.

On this approach, the main work that a lies ahead (which is so often the case) is documentation of the supported ontologies and how to use them.
