package io.github.yuokada.swagger.demoapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BasicConfig {

    @Value("${basic.message}")
    private String Message;
}
