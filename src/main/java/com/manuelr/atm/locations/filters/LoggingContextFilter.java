package com.manuelr.atm.locations.filters;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;

import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;
import jakarta.ws.rs.ext.Provider;
import org.jboss.logging.MDC;

import java.io.IOException;
import java.util.UUID;

@Provider
public class LoggingContextFilter implements ContainerRequestFilter {

  private static final String CORRELATION_ID_HEADER = "X-Correlation-ID";
  public static final String PATH = "path";

  @Context private UriInfo uriInfo;

  @Override
  public void filter(ContainerRequestContext requestContext) throws IOException {
    String correlationId = requestContext.getHeaderString(CORRELATION_ID_HEADER);
    if (correlationId == null || correlationId.isBlank()) {
      correlationId = UUID.randomUUID().toString();
    }

    // Get the full path and query parameters
    String fullPath = uriInfo.getRequestUri().toString();

    // Put correlation ID and path info into MDC
    MDC.put(CORRELATION_ID_HEADER, correlationId);
    MDC.put(PATH, fullPath);
  }
}
