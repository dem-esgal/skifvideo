package org.skifvideo.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class ModelController {

    @RequestMapping(value = "/modelControl", method = RequestMethod.GET)
    public String getModel() {
        return "[{\"task\":{\"name\":\"название\", \"percent\":11},\"date\": {\"time\":\"11:11:11\", \"date\":\"31.01.2015\"},\"master\":\"Хозяин\",\"accuracy\":1,\"status\":\"Running\"}]";
    }

}