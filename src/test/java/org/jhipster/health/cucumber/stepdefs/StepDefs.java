package org.jhipster.health.cucumber.stepdefs;

import org.jhipster.health.HealthApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = HealthApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
