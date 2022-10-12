package pt.telecom.alticci.resources;

import javax.inject.Inject;
import javax.validation.constraints.NotBlank;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.jboss.resteasy.annotations.jaxrs.PathParam;
import pt.telecom.alticci.services.AlticciService;


import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/alticci")
@Produces(MediaType.APPLICATION_JSON)
public class AlticciResource {

    @Inject
    AlticciService service;

    @GET
    @Path("/{n}")
    public Long getAlticciSequence(@NotBlank @PathParam Long n) {
        return service.executeAlticci(n);
    }
}