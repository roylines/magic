<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ebay="http://www.ebay.com/marketplace/search/v1/services">
<xsl:output method="text"/>

<xsl:template match="/">
var ads = [<xsl:apply-templates select="//ebay:item"/>];
</xsl:template>

<xsl:template match="ebay:item">
{ "i":"<xsl:value-of select="ebay:itemId"/>", "t":"<xsl:value-of select="ebay:title"/>","g":"<xsl:value-of select="ebay:galleryURL"/>","p":"<xsl:value-of select="ebay:sellingStatus/ebay:convertedCurrentPrice"/>" },
</xsl:template>

</xsl:stylesheet>
