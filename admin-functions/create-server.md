---
description: Will allow you to create a server on your pterodactyl panel.
---

# Create Server

{% api-method method="post" host="application." path="createServer\(\*args\)" %}
{% api-method-summary %}
Create Server
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="Version" type="string" required=true %}
Version of the server.
{% endapi-method-parameter %}

{% api-method-parameter name="Name" type="string" required=true %}
Name of the server.
{% endapi-method-parameter %}

{% api-method-parameter name="Owner Id" type="integer" required=true %}
Id of the account you want to create the server on
{% endapi-method-parameter %}

{% api-method-parameter name="Egg Id" type="integer" required=true %}
Id of the egg you want to create the server with
{% endapi-method-parameter %}

{% api-method-parameter name="Docker Image" type="string" required=true %}
The docker image you want the server to use
{% endapi-method-parameter %}

{% api-method-parameter name="Startup Command" type="string" required=true %}
The startup command that the server will start with
{% endapi-method-parameter %}

{% api-method-parameter name="RAM" type="integer" required=true %}
Amount of RAM you want the server to have
{% endapi-method-parameter %}

{% api-method-parameter name="Swap" type="integer" required=true %}
Amount of Swap you want the server to have. Normally 0.
{% endapi-method-parameter %}

{% api-method-parameter name="Disk" type="integer" required=true %}
Amount of Disk space you want the server to have
{% endapi-method-parameter %}

{% api-method-parameter name="IO" type="integer" required=true %}
Amount of IO you want the server to have. Leave at 500 unless you know what your doing.
{% endapi-method-parameter %}

{% api-method-parameter name="CPU" type="integer" required=true %}
Amount of CPU you want the server to have. 100 = 1 Core
{% endapi-method-parameter %}

{% api-method-parameter name="Databases" type="integer" required=true %}
Amount of databases you want the server to be able to make
{% endapi-method-parameter %}

{% api-method-parameter name="Backups" type="integer" required=true %}
The amount of backups you want the server to be able to make
{% endapi-method-parameter %}

{% api-method-parameter name="Allocations" type="integer" required=true %}
 The amount of allocations you want the server to be able to assign
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

