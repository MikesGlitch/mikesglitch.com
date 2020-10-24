<template>
  <div class="cv">
    <div class="cv__header">
      <div class="cv__header-personal-info">
        <h5>Personal Details</h5>

        <table class="bordered">
          <tr>
            <td>Name</td><td>Michael Clark</td>
          </tr>
          <tr>
            <td>Contact</td><td>07936707118</td>
          </tr>
          <tr>
            <td>Email</td><td>mclarkgb@gmail.com</td>
          </tr>
        </table>
      </div>
      <div class="cv__header-education">
        <h5>Education</h5>
        <table class="bordered">
          <tr>
            <td>University</td><td>University of West of Scotland</td>
          </tr>
          <tr>
            <td>Course</td><td>Software Development - First Class BSC Hons</td>
          </tr>
          <tr>
            <td>High School</td><td>Perth Academy</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="cv__experience">
      <div class="cv__experience">
        <h5>Experience</h5>
        <table class="work-experience">
          <tr>
            <td class="work-experience__employer">
              Sword IT Solutions <br> Dec 2019 – Present
            </td>
            <td class="work-experience__work-info">
              Full Stack Developer (Contract) <br>
              <p>
                Working with our Equiniti client on a to build a financial product This work has involved:
                <ul>
                  <li>Frontend with Angular, Material, HATEOAS</li>
                  <li>Backend with .Net Core, MongoDB, CQRS, RabbitMQ </li>
                  <li>Writing a full suite of automated tests using Cypress and XUnit</li>
                  <li>Azure platform used with Jira for tasks</li>
                </ul>
              </p>
            </td>
          </tr>
          <tr>
            <td class="work-experience__employer">
              Aggreko <br> Jan 2019 – Dec 2019
            </td>
            <td class="work-experience__work-info">
              .Net Core Developer (Contract) <br>
              <p>
                Working with Aggreko to update their legacy products and condense the functionality into a reliable, tested and maintainable product suite. The work involved:
                <ul>
                  <li>Re-implementing projects to follow Clean Architecture (Bob Martin)</li>
                  <li>Writing full suites of automated tests including application, integration and mutation.</li>
                  <li>Backend: .Net Core, Azure Functions, Dapper &amp; Sql Server, CosmosDb, MVC</li>
                  <li>Front end: Vue, TypeScript, Bootstrap, WebPack, SCSS, JQuery</li>
                </ul>
              </p>
            </td>
          </tr>

          <tr>
            <td class="work-experience__employer">
              Sword IT Solutions <br> Aug 2018 – Jan 2019
            </td>
            <td class="work-experience__work-info">
              React Front-End Developer (Contract) <br>
              <p>
                Working with our CBRE client to build a web app for managing safety in data centers.  This work has involved:
                <ul>
                  <li>Frontend with React, Redux, TypeScript, Webpack, SCSS, Bulma</li>
                  <li>Backend with .Net Core, WebAPI, CosmosDB</li>
                  <li>Azure Platform &amp; VSTS (Azure Devops)</li>
                </ul>
              </p>
            </td>
          </tr>

          <tr>
            <td class="work-experience__employer">
              Kingfisher Systems <br> Jul 2017 – Aug 2018
            </td>
            <td class="work-experience__work-info">
              Senior Software Developer<br>
              <p>
                Building and maintain an online payment service for vehicle auctions. The service allowed customers to securely make payments via Bank Account transfer and NextGear Credit and processed over $10 Million per month. This work has involved:
                <ul>
                  <li>Integrations with Banks and Credit companies for processing of payments</li>
                  <li>Integrations with External data services for auction and dealer information</li>
                  <li>Performance tuning with Redis, Entity Framework and Dapper</li>
                  <li>Background services with Hangfire and .Net Core.</li>
                  <li>Front end work with Angular, React and Bootstrap</li>
                </ul>
              </p>
            </td>
          </tr>

          <tr>
            <td class="work-experience__employer">
              SHE Software <br> Jul 2016 – Jul 2017
            </td>
            <td class="work-experience__work-info">
              Senior Software Developer<br>
              <p>
                Leading a small team focused on the delivery of “Version 2” of a flagship product. I focused on the full stack, which involved work with:
                <ul>
                  <li>UI redesign and re-implementation using Angular</li>
                  <li>Identity Server V3 Auth Integration</li>
                  <li>SignalR for real-time notifications</li>
                  <li>Microsoft Web Stack, NHibernate, Entity Framework and SQL Server</li>
                  <li>Feature Development work for a new Auditing system called EQS</li>
                </ul>
              </p>
            </td>
          </tr>

          <tr>
            <td class="work-experience__employer">
              Ideagen - Gael <br> Jul 2014 – Jul 2016
            </td>
            <td class="work-experience__work-info">
              Software Developer<br>
              <p>
                Working in various teams developing a very mature Health and Safety web application.  My time here was spent working with the:
                <ul>
                  <li>Product (Feature Development - Backbone.js, Telerik controls, Bootstrap, Less)</li>
                  <li>Platform (API and Integration Services - ServiceStack, MySQL, MongoDB, SQL Server)</li>
                  <li>Infrastructure (CQRS, AWS, Deployments, PowerShell Scripting, TeamCity)</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="cv__footer">
      <div class="cv__footer-profile">
        <h5>Profile</h5>
        <p>Hello! I'm Michael, a software developer available for contract work in Glasgow, Scotland.</p>
        <br>
        <p>I take pride in coding within consistently high standards and focus on the delivery of highly scalable, performant applications. I believe that the delivery of high-quality software is what clients pay me for and I strive to deliver those results on time and within scope.</p>
      </div>
      <div class="cv__footer-skills">
        <h5>Technical fluencies</h5>
        <p>
          Microsoft Web Stack: Web API, MVC, EF, SignalR <br>
          UI/UX Development: React + Redux, Angular, TypeScript <br>
          Technologies: Redis, SignalR, SeriLog, AutoMapper <br>
          Scripting: PowerShell/Batch <br>
          DB: SQL Server, Postgres, MongoDB, Cosmos
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.cv {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* A4 Width and height */
  width:794px;
  height:1122px;

  table.bordered {
    $border-color: #bbbdbc;
    border-collapse: collapse;

    td {
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      white-space: nowrap;
    }
  }

  table {
    tr {
      td {
        vertical-align: top;
      }
    }
  }

  .work-experience {
    td {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &__employer {
      width: 250px;
    }
  }

  &__header {
    display: flex;
    width: 100%;
    flex-direction: row;

    &-personal-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;

      border-top: solid;
      border-top-width: 6px;
      border-top-color: #a29acb;
      margin-right: 15px;
    }

    &-education {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;

      border-top: solid;
      border-top-width: 6px;
      border-top-color: #d07979;
      margin-left: 15px;
    }
  }

  &__footer {
    display: flex;
    width: 100%;
    flex-direction: row;

    &-profile {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;

      border-bottom: solid;
      border-bottom-width: 6px;
      border-bottom-color: #a6d4a4;
      margin-right: 15px;
    }

    &-skills {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;

      border-bottom: solid;
      border-bottom-width: 6px;
      border-bottom-color: #70cde0;
      margin-left: 15px;
    }
  }
}
</style>
