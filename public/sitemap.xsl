<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <!-- Match the root element -->
  <xsl:template match="/">
    <xsl:apply-templates/>
  </xsl:template>

  <!-- Match the urlset element -->
  <xsl:template match="urlset">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <!-- Match each url element -->
  <xsl:template match="url">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <!-- Match loc and lastmod elements -->
  <xsl:template match="loc|lastmod">
    <xsl:copy>
      <xsl:value-of select="."/>
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>

