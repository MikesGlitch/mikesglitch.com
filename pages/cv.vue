<template>
  <div class="cv">
    <div class="cv__header">
      <div class="cv__header-personal-info">
        <div class="cv__section-header">
          <img height="20" width="20" src="/information.svg" alt="Personal Details">
          <h4>Personal Details</h4>
        </div>

        <table class="summary-info">
          <tr>
            <td>Name</td>
            <td>
              Michael Clark
            </td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>
              07936707118
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              mclarkgb@gmail.com
            </td>
          </tr>
        </table>
      </div>
      <div class="cv__header-education">
        <div class="cv__section-header">
          <img height="20" width="20" src="/mortarboard.svg" alt="Education">
          <h4>Education</h4>
        </div>
        <table class="summary-info">
          <tr>
            <td>University</td>
            <td>
              University of West of Scotland
            </td>
          </tr>
          <tr>
            <td>Course</td>
            <td>
              Software Development - First Class BSC Hons
            </td>
          </tr>
          <tr>
            <td>High School</td>
            <td>
              Perth Academy
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="cv__experience">
      <div class="cv__section-header--underlined">
        <img height="20" width="20" src="/briefcase.svg" alt="Experience">
        <h4>Experience</h4>
      </div>
      <table class="work-experience">
        <tr>
          <td class="work-experience__employer">
            <h4>Sword IT Solutions</h4>
            <p>Dec 2019 – Present</p>
          </td>
          <td class="work-experience__work-info">
            <h4>Full Stack Developer (Contract)</h4>
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
            <h4>Aggreko</h4>
            <p>Jan 2019 – Dec 2019</p>
          </td>
          <td class="work-experience__work-info">
            <h4>.Net Core Developer (Contract)</h4>
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
            <h4>Sword IT Solutions</h4>
            <p>Aug 2018 – Jan 2019</p>
          </td>
          <td class="work-experience__work-info">
            <h4>React Front-End Developer (Contract)</h4>
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
            <h4>Kingfisher Systems</h4>
            <p>Jul 2017 – Aug 2018</p>
          </td>
          <td class="work-experience__work-info">
            <h4>Senior Software Developer</h4>
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
            <h4>SHE Software</h4>
            <p>Jul 2016 – Jul 2017</p>
          </td>
          <td class="work-experience__work-info">
            <h4>Senior Software Developer</h4>
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
            <h4>Ideagen - Gael</h4>
            <p>Jul 2014 – Jul 2016</p>
          </td>
          <td class="work-experience__work-info">
            <h4>Software Developer</h4>
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
    <div class="cv__footer">
      <div class="cv__footer-profile">
        <div class="cv__section-header--underlined">
          <img height="20" width="20" src="/user.svg" alt="Profile">
          <h4>Profile</h4>
        </div>
        <div class="cv__footer-content">
          <p>Hello! I'm Michael, a software developer available for contract work in Glasgow, Scotland.</p>
          <br>
          <p>I take pride in coding within consistently high standards and focus on the delivery of highly scalable, performant applications. I believe that the delivery of high-quality software is what clients pay me for and I strive to deliver those results on time and within scope.</p>
        </div>
      </div>
      <div class="cv__footer-skills">
        <div class="cv__section-header--underlined">
          <img height="20" width="20" src="/spanner.svg" alt="Technical Fluencies">
          <h4>Technical fluencies</h4>
        </div>
        <div class="cv__footer-content">
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
  </div>
</template>

<script lang="ts">
export default {
  layout: 'cv'
}
</script>

<style lang="scss">
@page {
    margin-top: 0in;
    margin-bottom: 0in;
    margin-left: 0in;
    margin-right: 0in;
}

.w-100 {
  width: 100%;
}

.cv {
  // $sectionHeaderColor: #43a1de;
  $sectionHeaderColor: black;

  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* A4 Width and height */
  width: 210mm;
  height: 297mm;

  @media screen {
    /* Not applied on print */
    border: 1px solid #888888;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  table.summary-info {
    $border-color: #bbbdbc;
    border-collapse: collapse;

    td {
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      white-space: nowrap;
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }

  table {
    tr {
      td {
        vertical-align: top;
      }
    }
  }

  &__section-header {
    display: flex;
    text-transform: uppercase;
    color: $sectionHeaderColor;
    padding-top: 10px;
    padding-bottom: 5px;

    h4 {
      margin-left: 1em;
      display: flex;
      align-self: center;
      font-weight: 500;
      font-size: 1.1em;
    }

    &--underlined {
      @extend .cv__section-header;

      border-bottom: solid;
      border-bottom-width: 1px;
    }
  }

  &__experience {
    margin-top: 5px;
    flex-grow: 1;
    padding-left: 30px;
    padding-right: 30px;

    .work-experience {
      td {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      ul {
        padding-left: 30px;
      }

      &__employer {
        width: 210px;
      }
    }
  }

  &__header {
    display: flex;
    @extend .w-100;
    flex-direction: row;

    &-personal-info {
      display: flex;
      flex-direction: column;
      @extend .w-100;
      height: calc(100% + 1px); // 1px is because of table border bottom - not rendering well in chrome
      overflow: hidden;

      border-top: solid;
      border-top-width: 6px;
      border-top-color: #a29acb;
      margin-right: 15px;
      padding-left: 30px;
    }

    &-education {
      display: flex;
      flex-direction: column;
      @extend .w-100;
      height: calc(100% + 1px); // 1px is because of table border bottom - not rendering well in chrome
      overflow: hidden;

      border-top: solid;
      border-top-width: 6px;
      border-top-color: #d07979;
      margin-left: 15px;
      padding-right: 30px;
    }
  }

  &__footer {
    margin-top: 5px;
    display: flex;
    @extend .w-100;
    flex-direction: row;

    &-profile {
      display: flex;
      flex-direction: column;
      @extend .w-100;
      overflow: hidden;

      border-bottom: solid;
      border-bottom-width: 6px;
      border-bottom-color: #a6d4a4;
      margin-right: 15px;
      padding-left: 30px;
    }

    &-content {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &-skills {
      display: flex;
      flex-direction: column;
      @extend .w-100;
      overflow: hidden;

      border-bottom: solid;
      border-bottom-width: 6px;
      border-bottom-color: #70cde0;
      margin-left: 15px;
      padding-right: 30px;
    }
  }
}
</style>
