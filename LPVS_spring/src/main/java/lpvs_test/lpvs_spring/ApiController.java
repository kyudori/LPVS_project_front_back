package lpvs_test.lpvs_spring;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api")
public class ApiController {

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public String login(@RequestBody LoginForm loginForm) {
        // LoginForm을 사용하여 로그인 로직을 처리합니다.
        // 로그인이 성공하면 적절한 응답을 반환합니다.
        return "로그인이 성공했습니다!";
    }

    @PostMapping("/join")
    @ResponseStatus(HttpStatus.CREATED)
    public String join(@RequestBody JoinForm joinForm) {
        // JoinForm을 사용하여 회원 가입 로직을 처리합니다.
        // 회원 가입이 성공하면 적절한 응답을 반환합니다.
        return "회원 가입이 완료되었습니다!";
    }

    // 다른 REST API 엔드포인트들을 여기에 추가할 수 있습니다.
    // 예를 들어, GET 요청을 처리하는 엔드포인트를 추가할 수 있습니다.
    // @GetMapping("/example")
    // public String example() {
    //     return "예시 엔드포인트입니다!";
    // }

}

