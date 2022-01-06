package llp.cour.appback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PubliciteController {

  @Autowired
  private PubliciteService publiciteService;

  @GetMapping("/pub/{boisson}")
  @ResponseBody
  public String getPubliciteFromBoisson(@PathVariable("boisson") String boisson) {

    return publiciteService.getPubliciteFromBoisson(boisson);

  }

}
