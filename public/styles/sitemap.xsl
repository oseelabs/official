<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <!-- Template for the root element -->
  <xsl:template match="/">
    <xsl:apply-templates/>
  </xsl:template>

  <!-- Template for the urlset element -->
  <xsl:template match="urlset">
    <xsl:apply-templates/>
  </xsl:template>

  <!-- Template for each URL -->
  <xsl:template match="url">
    <xsl:text>&#10;</xsl:text>
    <xsl:value-of select="loc"/>
    <xsl:text>  -  </xsl:text>
    <xsl:value-of select="loc"/>
  </xsl:template>
</xsl:stylesheet>
